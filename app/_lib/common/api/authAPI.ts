import URLHandler from "../urlHandler";

class AuthAPI {
    async authenticate(access_token: string) {
        return fetch(URLHandler.getBaseAuthApiURL() + "/me", {
            headers: {
                Authorization: access_token,
            },
        });
    }
}

export default AuthAPI;
