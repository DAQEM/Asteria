import type { SVGProps } from "react";

export function ForgeIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1.5"
            clipRule="evenodd"
            viewBox="0 0 24 24"
            {...props}
        >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                d="M2 7.5h8v-2h12v2s-7 3.4-7 6 3.1 3.1 3.1 3.1l.9 3.9H5l1-4.1s3.8.1 4-2.9c.2-2.7-6.5-.7-8-6Z"
            ></path>
        </svg>
    );
}
