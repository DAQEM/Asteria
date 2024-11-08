import BaseApi from "./baseApi";

class UsersApi extends BaseApi {
    constructor() {
        super("/v1/users");
    }

    async me(token?: string): Promise<ApiResponse<User>> {
        const response = await fetch(this.getApiUrl() + "/me", {
            headers: this.getAuthenticationHeader(token),
            cache: "no-cache",
        });

        return this.handleApiResponse(response);
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

    async updateUser(name: string, bio?: string): Promise<ApiResponse<User>> {
        const response = await fetch(this.getApiUrl(), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                ...this.getAuthenticationHeader(),
            },
            body: JSON.stringify({ name, bio }),
        });
        return this.handleApiResponse(response);
    }
}

export default UsersApi;
