import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const response = NextResponse.redirect(request.nextUrl.origin, 302);
    response.headers.set("Set-Cookie", "hestia-auth-token=; Max-Age=0; Path=/");
    return response;
}
