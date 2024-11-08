import { NextRequest, NextResponse } from "next/server";
import AuthApi from "./app/_lib/common/api/authApi";
import UsersApi from "./app/_lib/common/api/usersApi";
import URLHandler from "./app/_lib/common/urlHandler";

const accessTokenCookieName = "auth-token";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith("/logout")) {
        return NextResponse.next();
    }

    const nextResponse = NextResponse.next({
        request: {
            headers: request.headers,
        },
    });

    nextResponse.headers.set("x-pathname", pathname);

    const cookies = request.cookies;
    const access_token = cookies.get(accessTokenCookieName)?.value;
    if (access_token) {
        const meResponse = await new UsersApi().me();
        if (meResponse.success) {
            nextResponse.headers.set("x-user", JSON.stringify(meResponse.data));
        } else {
            const refreshResponse = await new AuthApi().refreshToken();
            if (refreshResponse.success) {
                //set new token to cookie
                const token = refreshResponse.data?.token;
                if (token) {
                    nextResponse.cookies.set(accessTokenCookieName, token, {
                        maxAge: 60 * 60 * 24 * 90, // 90 days
                    });
                    const meResponse = await new UsersApi().me(token);
                    if (meResponse.success) {
                        nextResponse.headers.set(
                            "x-user",
                            JSON.stringify(meResponse.data)
                        );
                    } else {
                        console.error(
                            "Failed to get user after refreshing token"
                        );
                        return handleLogout(request);
                    }
                    return nextResponse;
                } else {
                    console.error("Failed to get token after refreshing token");
                    return handleLogout(request);
                }
            } else {
                console.error("Failed to refresh token");
                return handleLogout(request);
            }
        }
    }

    return nextResponse;
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|.*\\.svg$|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.ico$).*)",
    ],
};

function handleLogout(request: NextRequest): NextResponse {
    const url = new URL(request.url);
    const returnUrl = url.searchParams.get("returnUrl");
    const logoutUrl = URLHandler.getLogoutURL(
        returnUrl || URLHandler.getAsteriaURL()
    );
    return NextResponse.redirect(logoutUrl);
}
