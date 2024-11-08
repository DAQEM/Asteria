import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

const Markdown = async ({ content }: { content: string }) => {
    return (
        <div className="markdown-body">
            <MDXRemote
                source={content}
                options={{
                    mdxOptions: {
                        rehypePlugins: [rehypeHighlight, rehypeSlug],
                    },
                }}
            />
        </div>
    );
};

export default Markdown;
