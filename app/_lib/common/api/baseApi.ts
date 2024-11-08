import { cookies } from "next/headers";
import URLHandler from "../urlHandler";

abstract class BaseApi {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    getApiUrl() {
        return URLHandler.getBaseApiURL() + this.url;
    }

    getAuthToken() {
        return cookies().get("auth-token")?.value || "";
    }

    getAuthenticationHeader(token?: string) {
        return {
            Authorization: "Bearer " + (token || this.getAuthToken()),
        };
    }

    failedResponse<T>(response: Response): ApiResponse<T> {
        return {
            success: false,
            statusCode: response.status,
            errors: {
                all: ["An unknown error occurred"],
            },
        };
    }

    unauthenticatedResponse<T>(): ApiResponse<T> {
        return {
            success: false,
            statusCode: 401,
            errors: {
                all: ["Unauthenticated"],
            },
        };
    }

    async handleApiResponse<T>(response: Response): Promise<ApiResponse<T>> {
        if (response.status === 400) {
            return await response.json();
        }

        if (response.status === 401) {
            return this.unauthenticatedResponse();
        }

        if (!response.ok) {
            return this.failedResponse(response);
        }

        return {
            success: true,
            statusCode: response.status,
            data: await response.json(),
        };
    }
}

export default BaseApi;
