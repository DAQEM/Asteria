"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ searchParam }: { searchParam: string }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set(searchParam, term);
        } else {
            params.delete(searchParam);
        }
        replace(`${pathname}?${params.toString()}`);
    }, 500);

    return (
        <label className="input input-bordered flex items-center gap-2 grow">
            <FaMagnifyingGlass className="size-4" />
            <input
                type="text"
                className="grow w-full"
                placeholder="Search"
                defaultValue={searchParams.get(searchParam)?.toString()}
                onChange={(e) => handleSearch(e.target.value)}
            />
        </label>
    );
};

export default Search;
