import { cookies } from "next/headers";
import BaseApi from "./baseApi";

class AuthAPI extends BaseApi {
    constructor() {
        super("/v1/authentication");
    }

    async authenticate(): Promise<ApiResponse<User>> {
        const response = await fetch(this.getApiUrl() + "/me", {
            headers: {
                Authorization: cookies().get("hestia-auth-token")?.value || "",
            },
        });

        return this.handleApiResponse(response);
    }
}

export default AuthAPI;
