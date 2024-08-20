const BodyContainer = ({
    children,
    type,
    className,
}: {
    children: React.ReactNode;
    type?: "default" | "full" | "narrow" | "wide";
    className?: string;
}) => {
    className += " mx-auto px-2 ";
    switch (type) {
        case undefined && "default":
            className += "max-w-7xl";
            break;
        case "full":
            className += "max-w-full";
            break;
        case "narrow":
            className += "max-w-5xl";
            break;
        case "wide":
            className += "max-w-9xl";
            break;
    }
    return <section className={className}>{children}</section>;
};

export default BodyContainer;
