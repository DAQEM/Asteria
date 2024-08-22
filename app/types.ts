type Theme = "player" | "developer";

type ApiResponse<T> = {
    success: boolean;
    statusCode: number;
    data?: T;
    errors?: Errors;
};

type Errors = {
    [key: string]: string[];
};

type User = {
    id: number;
    name: string;
    bio?: string;
    email: string;
    image: string;
    role: string;
    joined: number;
    last_active: number;
    accounts: Account[] | null;
}

type Account = {}

type PagedResponse<T> = {
    data: T[];
    page: number;
    page_size: number;
    total_count: number;
    total_pages: number;
};

type Project = {
    id: number;
    name: string;
    summary: string;
    description: string;
    slug: string;
    image_url: string;
    banner_url: string;
    downloads: number;
    git_hub_url: string;
    curse_forge_id: string;
    curse_forge_url: string;
    modrinth_id: string;
    modrinth_url: string;
    type: string;
    categories: string[];
    loaders: string[];
    users: User[];
}