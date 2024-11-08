const BodyContainer = ({
    children,
    type,
    className,
}: {
    children: React.ReactNode;
    type?: "default" | "full" | "narrow" | "wide";
    className?: string;
}) => {
    className = className || "";
    className += " mx-auto px-2 w-full ";
    switch (type) {
        case undefined && "default":
            className += "max-w-7xl px-4";
            break;
        case "full":
            className += "max-w-full px-0 mx-0";
            break;
        case "narrow":
            className += "max-w-5xl px-4";
            break;
        case "wide":
            className += "max-w-9xl px-4";
            break;
    }
    return <section className={className}>{children}</section>;
};

export default BodyContainer;
