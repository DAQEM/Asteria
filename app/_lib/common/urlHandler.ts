class URLHandler {
    static getBaseURL() {
        return process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    }

    static getBaseApiURL() {
        return this.getBaseURL() + "/api";
    }

    static getBaseAuthApiURL() {
        return this.getBaseApiURL() + "/v1/authentication";
    }

    static getLoginURL(provider: string, returnUrl: string) {
        return (
            this.getBaseAuthApiURL() +
            `/login/${provider}?returnUrl=${returnUrl}`
        );
    }

    static getLogoutURL(returnUrl: string) {
        return this.getBaseAuthApiURL() + `/logout?returnUrl=${returnUrl}`;
    }
}

export default URLHandler;
