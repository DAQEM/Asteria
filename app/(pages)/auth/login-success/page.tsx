"use client";

import { useEffect } from "react";

export default function Page() {

    useEffect(() => {
        window.location.href = new URLSearchParams(window.location.search).get("url") || "/";
    });

    return (
        <div className="flex w-full h-full justify-center items-center flex-col gap-2 min-h-72">
            <h1 className="text-3xl font-medium">
                <span>Logged in successfully!</span>
            </h1>
            <p className="text-lg">Redirecting to your latest location...</p>
        </div>
    );
}
