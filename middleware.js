import { NextResponse, NextRequest } from "next/server";
import { verifyJwtToken } from "./lib/auth";

export async function middleware(request) {
    const { url, nextUrl, cookies } = request;
    const { value: token } = cookies.get("token") ?? { value: null };

    // Login page authentication control
    if (nextUrl.pathname.startsWith("/login")) {
        if (token && (await verifyJwtToken(token))) {
            return NextResponse.redirect(new URL("/admin", url));
        }
        return NextResponse.next();
    }

    // Administration page authentication control
    if (nextUrl.pathname.startsWith("/admin")) {
        const hasVerifiedToken = token && (await verifyJwtToken(token));

        if (!hasVerifiedToken) {
            return NextResponse.redirect(new URL("/login", url));
        }

        return NextResponse.next();
    }

}

export const config = {
    matcher: ["/admin/:path*", "/login"],
};