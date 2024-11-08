import BaseApi from "./baseApi";

class ProjectsApi extends BaseApi {
    constructor() {
        super("/v1/projects");
    }

    async getAll(
        page: number,
        pageSize: number,
        types: string[],
        loaders: string[],
        categories: string[],
        order?: string,
        query?: string
    ): Promise<PagedResponse<Project>> {
        const searchParams = new URLSearchParams();

        searchParams.set("page", page.toString());

        searchParams.set("pageSize", pageSize.toString());

        if (types.length > 0) {
            types.forEach((type) => searchParams.append("types", type));
        }

        if (loaders.length > 0) {
            loaders.forEach((loader) => searchParams.append("loaders", loader));
        }

        if (categories.length > 0) {
            categories.forEach((category) =>
                searchParams.append("categories", category)
            );
        }

        if (query) {
            searchParams.set("query", query);
        }

        if (order) {
            searchParams.set("order", order);
        }

        let url = this.getApiUrl();

        if (searchParams.toString()) {
            url += "?" + searchParams.toString();
        }

        const response = await fetch(url, {
            cache: "no-cache",
        });
        if (!response.ok) {
            return {
                data: [],
                page: 0,
                page_size: 0,
                total_count: 0,
                total_pages: 0,
            };
        }
        return await response.json();
    }

    async getAllUser(
        page: number,
        pageSize: number,
        types: string[],
        order?: string,
        query?: string
    ): Promise<PagedResponse<Project>> {
        const searchParams = new URLSearchParams();

        searchParams.set("page", page.toString());

        searchParams.set("pageSize", pageSize.toString());

        if (types.length > 0) {
            types.forEach((type) => searchParams.append("types", type));
        }

        if (query) {
            searchParams.set("query", query);
        }

        if (order) {
            searchParams.set("order", order);
        }

        let url = this.getApiUrl() + "/user";

        if (searchParams.toString()) {
            url += "?" + searchParams.toString();
        }

        const response = await fetch(url, {
            cache: "no-cache",
        });
        if (!response.ok) {
            return {
                data: [],
                page: 0,
                page_size: 0,
                total_count: 0,
                total_pages: 0,
            };
        }
        return await response.json();
    }

    async getAllCategories(): Promise<Category[]> {
        const url = this.getApiUrl() + "/categories";
        const response = await fetch(url, {
            cache: "no-cache",
        });
        if (!response.ok) {
            return [];
        }
        return await response.json();
    }

    // Works with both id and slug
    async getProject(
        id: string,
        categories?: boolean,
        users?: boolean
    ): Promise<Project | null> {
        const url =
            this.getApiUrl() +
            "/" +
            id +
            "?categories=" +
            (categories || false) +
            "&users=" +
            (users || false);
        const response = await fetch(url, {
            cache: "no-cache",
        });
        if (!response.ok) {
            return null;
        }
        return await response.json();
    }

    async getProjectsByUser(username: string): Promise<PagedResponse<Project>> {
        const url = this.getApiUrl() + "?user=" + username;
        const response = await fetch(url, {
            cache: "no-cache",
        });
        if (!response.ok) {
            return {
                data: [],
                page: 0,
                page_size: 0,
                total_count: 0,
                total_pages: 0,
            };
        }
        return await response.json();
    }

    async update(
        slug: string,
        data: {
            is_published: boolean;
            should_sync: boolean;
            modrinth_id: string;
            curse_forge_id?: string;
        }
    ): Promise<ApiResponse<Project>> {
        const url = this.getApiUrl() + "/" + slug;
        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                ...this.getAuthenticationHeader(),
            },
            body: JSON.stringify(data),
        });
        return this.handleApiResponse(response);
    }
}

export default ProjectsApi;
