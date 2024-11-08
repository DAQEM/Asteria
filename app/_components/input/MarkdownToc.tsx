import { remark } from "remark";

const MarkdownToc = ({ content }: { content: string }) => {
    const processor = remark().use(require("remark-extract-toc"));
    const node = processor.parse(content);
    const toc: TocEntry[] = processor.runSync(node) as any as TocEntry[];

    console.log(toc);

    const renderToc = (entry: TocEntry, index: number) => {
        if (entry.depth > 3) return null;

        return (
            <li key={index} className="w-full">
                <a
                    className="w-full"
                    href={
                        "#" +
                        entry.value
                            .toLowerCase()
                            .replace(/[^a-z0-9\s]/g, "")
                            .replace(/\s+/g, "-")
                    }
                >
                    {entry.value}
                </a>
                <ul>
                    {entry.children.map((child, index) =>
                        renderToc(child, index)
                    )}
                </ul>
            </li>
        );
    };

    if (toc.length === 0) return null;

    return (
        <div>
            <ul className="simple-card menu">
                <span className="text-lg font-semibold">Contents</span>
                {toc.map((entry, index) => renderToc(entry, index))}
            </ul>
        </div>
    );
};

export default MarkdownToc;

export type TocEntry = {
    depth: number;
    value: string;
    children: TocEntry[];
};
