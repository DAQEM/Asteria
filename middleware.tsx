import { NextRequest, NextResponse } from "next/server";
import AuthAPI from "./app/_lib/common/api/authAPI";

const accessTokenCookieName = "hestia-auth-token";

export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith("/logout")) {
        return handleLogout(request);
    }

    // Store current request url in a custom header, which you can read later
    const requestHeaders = request.headers;
    requestHeaders.set("x-pathname", request.nextUrl.pathname);

    const cookies = request.cookies;
    const access_token = cookies.get(accessTokenCookieName)?.value;
    if (access_token) {
        const response = await new AuthAPI().authenticate(access_token);
        if (!response.ok) {
            cookies.delete(accessTokenCookieName);
        } else {
            const user = await response.json();
            requestHeaders.set("x-user", JSON.stringify(user));
            console.log("User authenticated", user);
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
    response.cookies.delete(accessTokenCookieName);
    return response;
}
