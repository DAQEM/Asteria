import React from "react";

export type GridProps = {
    children?: React.ReactNode;
    cols?: { pc: string; mobile: string } | string;
    rows?: { pc: string; mobile: string } | string;
    gap?:
        | {
              pc: { x: number; y: number } | number;
              mobile: { x: number; y: number } | number;
          }
        | { x: number; y: number }
        | number;
    className?: string;
};

const Grid: React.FC<GridProps> = ({
    children,
    cols = { pc: "1", mobile: "1" },
    rows = { pc: "1", mobile: "1" },
    gap = 0,
    className = "",
}) => {
    const getClassNames = (
        value: { pc: string; mobile: string } | string,
        prefix: string
    ) => {
        if (typeof value === "object") {
            return `lg:${prefix}-${value.pc} ${prefix}-${value.mobile}`;
        }
        return `${prefix}-${value}`;
    };

    const getGapClassNames = (
        value:
            | {
                  pc: { x: number; y: number } | number;
                  mobile: { x: number; y: number } | number;
              }
            | { x: number; y: number }
            | number
    ) => {
        if (typeof value === "object") {
            const anyValue = value as any;
            if (anyValue.pc && anyValue.mobile) {
                if (anyValue.pc.x && anyValue.pc.y) {
                    return `lg:gap-x-${anyValue.pc.x} gap-x-${anyValue.mobile.x} lg:gap-y-${anyValue.pc.y} gap-y-${anyValue.mobile.y}`;
                }
                return `lg:gap-${anyValue.pc} gap-${anyValue.mobile}`;
            }
            return `gap-x-${anyValue.x} gap-y-${anyValue.y}`;
        }
        return `gap-${value}`;
    };

    const classNames = [
        "grid",
        getClassNames(cols, "grid-cols"),
        getClassNames(rows, "grid-rows"),
        getGapClassNames(gap),
    ].join(" ");

    return <div className={`${classNames} ${className}`}>{children}</div>;
};

export default Grid;
