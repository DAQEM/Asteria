import BaseApi from "./baseApi";

class BlogsApi extends BaseApi {
    constructor() {
        super("/v1/blogs");
    }

    async getAll(
        page: number,
        pageSize: number,
        categories: string[],
        query?: string
    ): Promise<PagedResponse<Project>> {
        const searchParams = new URLSearchParams();

        searchParams.set("page", page.toString());

        searchParams.set("pageSize", pageSize.toString());

        if (categories.length > 0) {
            categories.forEach((category) =>
                searchParams.append("categories", category)
            );
        }

        if (query) {
            searchParams.set("query", query);
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

    async getAllCategories(): Promise<string[]> {
        const response = await fetch(this.getApiUrl() + "/categories", {
            cache: "no-cache",
        });
        if (!response.ok) {
            return [];
        }
        return await response.json();
    }
}

export default BlogsApi;
