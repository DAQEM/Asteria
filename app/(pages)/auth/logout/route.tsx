import URLHandler from "@/app/_lib/common/urlHandler";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const returnUrl = url.searchParams.get("returnUrl");
    const logoutUrl = URLHandler.getLogoutURL(
        returnUrl || URLHandler.getAsteriaURL()
    );
    return NextResponse.redirect(logoutUrl);
}
