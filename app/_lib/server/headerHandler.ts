//headersHandler.ts
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import { headers } from "next/headers";

export default class HeadersHandler {
    static getHeaders(): ReadonlyHeaders {
        return headers();
    }

    static getPathname(): string | null {
        return this.getHeaders().has("x-pathname") ? this.getHeaders().get("x-pathname") as string : null;
    }

    static getUser(): User | null {
        return this.getHeaders().has("x-user") ? JSON.parse(this.getHeaders().get("x-user") as string) as User : null;
    }
}