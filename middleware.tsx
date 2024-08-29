import { NextRequest, NextResponse } from "next/server";
import AuthAPI from "./app/_lib/common/api/authAPI";

const accessTokenCookieName = "hestia-auth-token";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith("/logout")) {
        return NextResponse.next();
    }

    // Store current request url in a custom header, which you can read later
    const requestHeaders = request.headers;
    requestHeaders.set("x-pathname", pathname);

    const cookies = request.cookies;
    const access_token = cookies.get(accessTokenCookieName)?.value;
    if (access_token) {
        const response = await new AuthAPI().authenticate();
        
        if (response.success) {
            requestHeaders.set("x-user", JSON.stringify(response.data));
        } else {
            cookies.delete(accessTokenCookieName);
        }
    }

    return NextResponse.next({
        request: {
            // Apply new request headers
            headers: requestHeaders,
        },
    });
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|.*\\.svg$|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.ico$).*)",
    ],
};

function handleLogout(request: NextRequest): NextResponse {
    // Redirect to the home page without the accessToken cookie
    const response = NextResponse.redirect(new URL("/", request.url));
    response.cookies.set(accessTokenCookieName, "", {
        maxAge: 0,
    });
    return response;
}
