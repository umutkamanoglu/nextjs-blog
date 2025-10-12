import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyJwtToken } from "@/lib/auth";

export async function GET(request) {

    const token = await request.cookies.get("token")?.value ?? null

    if (!token) {
        return NextResponse.json({
            status: "fail",
            message: "No active user session was found."
        })
    }

    const payload = await verifyJwtToken(token)
    if (!payload) {
        return NextResponse.json({
            status: "fail",
            message: "No active user session was found."
        })
    }

    const userWithPw = await prisma.users.findUnique({
        where: {
            id: payload.id
        }
    })

    const { password, created_at, updated_at, ...user } = userWithPw

    return NextResponse.json(user)
}