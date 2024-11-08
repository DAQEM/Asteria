import BlogCard from "@/app/_components/blog/BlogCard";
import BlogsApi from "@/app/_lib/common/api/blogsApi";

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
        pageSize?: string;
        categories?: string[];
    };
}) {
    const query = searchParams?.query;
    const page = Number(searchParams?.page) || 1;
    const pageSize = Number(searchParams?.pageSize) || 20;
    const categories =
        typeof searchParams?.categories === "string"
            ? [searchParams.categories]
            : searchParams?.categories || [];

    const blogsApi = new BlogsApi();
    const [blogs, allCategories] = await Promise.all([
        blogsApi.getAll(page, pageSize, categories, query),
        blogsApi.getAllCategories(),
    ]);

    return (
        <div>
            {blogs.data.map((blog) => (
                <BlogCard
                    key={blog.id}
                    title={blog.name}
                    slug={blog.slug}
                    description={blog.summary}
                    image={blog.image_url}
                />
            ))}
        </div>
    );
}
