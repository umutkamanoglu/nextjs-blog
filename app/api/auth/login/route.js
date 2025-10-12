import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from 'bcrypt'
import { SignJWT } from "jose";
import { getJwtSecretKey, verifyJwtToken } from "@/lib/auth";

export async function POST(req) {

    const form = await req.formData();
    const username = form.get("username");
    const password = form.get("password");

    const user = await prisma.users.findFirst({
        where: {
            username: username
        },
    });

    if (!user) {
        return NextResponse.json({
            status: "fail",
            message: "Kullanıcı adı veya şifre hatalı",
        });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        return NextResponse.json({
            status: "fail",
            message: "Kullanıcı adı veya şifre hatalı",
        });
    }

    const token = await new SignJWT({
        username: user.username,
        id: user.id,
    })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("3d")
        .sign(getJwtSecretKey());

    const response = NextResponse.json({
        status: "ok",
        message: "Login successful."
    })

    response.cookies.set({
        name: "token",
        value: token,
        path: "/",
    });

    return response;

}