"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Select = ({
    searchParam,
    options,
    defaultValue,
}: {
    searchParam: string;
    options: { value: string; label: string }[];
    defaultValue?: string;
}) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSelect = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set(searchParam, term);
        } else {
            params.delete(searchParam);
        }
        replace(`${pathname}?${params.toString()}`);
    }, 500);

    return (
        <select
            className="select select-bordered grow"
            onChange={(e) => handleSelect(e.target.value)}
            defaultValue={searchParams.get(searchParam) || defaultValue || options[0].value}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
