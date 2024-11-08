import BaseApi from "./baseApi";

class SessionsApi extends BaseApi {
    constructor() {
        super("/v1/auth/sessions");
    }

    async getAll(): Promise<ApiResponse<SessionResponse[]>> {
        const response = await fetch(this.getApiUrl(), {
            headers: this.getAuthenticationHeader(),
            cache: "no-cache",
        });

        return this.handleApiResponse(response);
    }

    async delete(id: string): Promise<void> {
        await fetch(this.getApiUrl() + "/" + id, {
            method: "DELETE",
            headers: this.getAuthenticationHeader(),
            cache: "no-cache",
        });
    }
}

export default SessionsApi;
