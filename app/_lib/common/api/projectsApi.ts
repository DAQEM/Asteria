import URLHandler from "../urlHandler";

class ProjectsApi {
    getApiUrl() {
        return URLHandler.getBaseApiURL() + "/v1/project";
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
            next: {
                revalidate: 60
            },
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
        const url = this.getApiUrl() + "category";
        const response = await fetch(url, {
            next: {
                revalidate: 60 * 60,
            },
        });
        if (!response.ok) {
            return [];
        }
        return await response.json();
    }
}

export default ProjectsApi;
