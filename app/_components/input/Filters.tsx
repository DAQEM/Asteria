"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import Iconed from "../icon/Iconed";

const Filters = ({
    searchParam,
    options,
}: {
    searchParam: string;
    options: { value: string; label: string }[];
}) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleFilter = useDebouncedCallback(() => {
        const params = new URLSearchParams(searchParams);
        const parent = document.getElementById(searchParam);
        const checkboxes: HTMLInputElement[] =
            (parent?.querySelectorAll("input[type=checkbox]") as any) || [];

        params.delete(searchParam);

        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                params.append(searchParam, checkbox.name);
            }
        });

        replace(`${pathname}?${params.toString()}`);
    }, 500);

    return (
        <div id={searchParam}>
            {options.map((option, index) => (
                <div key={index} className="form-control">
                    <label className="label cursor-pointer justify-start gap-2 py-1">
                        <input
                            type="checkbox"
                            name={option.value}
                            className="checkbox checkbox-sm bg-base-300"
                            defaultChecked={searchParams
                                .getAll(searchParam)
                                .includes(option.value)}
                            onChange={(e) => handleFilter()}
                        />
                        <Iconed text={option.label} size={4} />
                    </label>
                </div>
            ))}
        </div>
    );
};

export default Filters;
