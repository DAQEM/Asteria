const HomeCornerSvg = ({ className }: { className?: string }) => {
    return (
        <svg
            data-name="Home Corner"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 1000"
            className={className}
            style={{ fill: "url(#gradient)" }}
        >
            <defs>
                <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="0">
                    <stop offset="0%" stopColor="var(--primary-color)" />
                    <stop
                        offset="100%"
                        stopColor="var(--primary-color-light)"
                    />
                </linearGradient>
            </defs>
            <path d="M1000,1000H147.32C54.54,1000-15.13,917.86,2.84,829.65L132.47,0H1000Z" />
        </svg>
    );
};

export default HomeCornerSvg;
