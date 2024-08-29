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
};

type Account = {};

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
    git_hub_url: string;
    curse_forge_id: string;
    curse_forge_url: string;
    curse_forge_downloads: number;
    modrinth_id: string;
    modrinth_url: string;
    modrinth_downloads: number;
    is_featured: boolean;
    is_published: boolean;
    should_sync: boolean;
    created_at: number;
    synced_at: number;
    type: string;
    categories: string[];
    loaders: string[];
    users: User[];
};

type Category = {
    id: number;
    name: string;
    slug: string;
    meta_title: string;
    content: string;
};

type FormProps = {
    children: any;
    action: (currentState: FormState, formData: FormData) => Promise<any>;
    className?: string;
    submitText?: string;
    submitButton: boolean;
};

type FormState = {
    errors?: Errors;
    success?: boolean;
    message?: string;
};

type ServerAction = (
    currentState: FormState,
    formData: FormData
) => Promise<any>;
