import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    const users = await prisma.users.findMany()
    return NextResponse.json(users)
}