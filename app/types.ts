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