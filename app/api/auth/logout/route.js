import { NextResponse } from "next/server";

export async function POST(request) {
    const { cookies } = request;
    const { value: token } = cookies.get("token") ?? { value: null };
    if (!token) {
        return NextResponse.json({
            status: "fail",
            message: "User token not found."
        })
    }

    const response = NextResponse.json({
        status: "ok",
        message: "Logout succesful.",
    })


    response.cookies.set({
        name: "token",
        value: token,
        expires: new Date(0),
        path: "/",
    });

    return response
}