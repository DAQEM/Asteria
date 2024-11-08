"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Select = ({
    searchParam,
    options,
    defaultValue,
    debounce = 500,
}: {
    searchParam: string;
    options: { value: string; label: string }[];
    defaultValue?: string;
    debounce?: number;
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
    }, debounce);

    return (
        <select
            className="select select-bordered grow"
            onChange={(e) => handleSelect(e.target.value)}
            defaultValue={
                searchParams.get(searchParam) ||
                defaultValue ||
                options[0].value
            }
        >
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
