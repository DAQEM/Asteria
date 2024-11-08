class URLHandler {
    static getAsteriaURL() {
        return process.env.NEXT_PUBLIC_ASTERIA_URL || "http://localhost:3000";
    }

    static getHestiaURL() {
        return process.env.NEXT_PUBLIC_HESTIA_URL || "http://localhost:5000";
    }

    static getBaseApiURL() {
        return this.getHestiaURL() + "/api";
    }

    static getBaseAuthApiURL() {
        return this.getBaseApiURL() + "/v1/auth";
    }

    static getLoginURL(provider: string, returnUrl: string) {
        return (
            this.getBaseAuthApiURL() +
            `/login?provider=${provider}&returnUrl=${this.getAsteriaURL()}/auth/login-success?url=${returnUrl}`
        );
    }

    static getLogoutURL(returnUrl: string) {``
        return this.getBaseAuthApiURL() + `/logout?returnUrl=${returnUrl}`;
    }
}

export default URLHandler;
