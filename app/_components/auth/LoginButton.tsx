"use client";

import URLHandler from "@/app/_lib/common/urlHandler";
import { usePathname } from "next/navigation";

const LoginButton = ({
    children,
    provider,
}: {
    children: React.ReactNode;
    provider: string;
}) => {
    return (
        <a
            href={URLHandler.getLoginURL(
                provider,
                URLHandler.getBaseURL() + usePathname()
            )}
            className="btn btn-primary text-base"
        >
            {children}
        </a>
    );
};

export default LoginButton;
