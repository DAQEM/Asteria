import BaseApi from "./baseApi";

class UsersApi extends BaseApi {
    constructor() {
        super("/v1/user");
    }

    async getUser(username: string): Promise<User | null> {
        const response = await fetch(this.getApiUrl() + "/" + username, {
            cache: "no-cache",
        });
        if (!response.ok) {
            return null;
        }
        return await response.json();
    }

    async updateUser(name: string, bio: string): Promise<ApiResponse<User>> {
        const response = await fetch(this.getApiUrl(), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: this.getAuthToken(),
            },
            body: JSON.stringify({ name, bio }),
        });

        const getSetCookies: string[] = response.headers.getSetCookie();

        const token = this.getAuthTokenFromSetCookie(getSetCookies);

        if (token) {
            this.setAuthToken(token);
        }

        return this.handleApiResponse(response);
    }
}

export default UsersApi;
