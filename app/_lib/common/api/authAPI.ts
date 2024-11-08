import BaseApi from "./baseApi";

class AuthApi extends BaseApi {
    constructor() {
        super("/v1/auth");
    }

    async refreshToken(): Promise<ApiResponse<RefreshTokenResponse>> {
        const response = await fetch(this.getApiUrl() + "/refresh", {
            headers: this.getAuthenticationHeader(),
            cache: "no-cache",
        });

        return this.handleApiResponse(response);
    }
}

export default AuthApi;
