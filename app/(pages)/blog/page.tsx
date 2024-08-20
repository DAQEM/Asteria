import BlogCard from "@/app/_components/blog/BlogCard";
import FeaturedBlog from "@/app/_components/blog/FeaturedBlog";
import BodyContainer from "@/app/_components/BodyContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Read All The Blogs. - DAQEM Studios",
    description:
        "DAQEM Studios offers a variety of engaging articles, tutorials, and project updates. Stay updated with our latest blog posts.",
};

export default function Page() {
    return (
        <BodyContainer type="narrow">
            <div className="mt-6 breadcrumbs text-sm">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="mt-12">
                <h1 className="text-5xl font-semibold">
                    <span>
                        <span className="text-primary-gradient">
                            DAQEM Studios
                        </span>{" "}
                        Blog
                    </span>
                </h1>
                <p className="mt-6 max-w-2xl">
                    At DAQEM Studios, we are constantly innovating and
                    developing new projects. Here, you can stay updated with our
                    latest projects, tutorials, and other engaging articles.
                </p>
            </div>
            <div className="mt-12">
                <FeaturedBlog
                    title="Test Title but a very long one that should be truncated"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita odit ipsa qui incidunt dolorum suscipit cumque aliquid perferendis voluptatibus non! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita odit ipsa qui incidunt dolorum suscipit cumque aliquid perferendis voluptatibus non!"
                    image="https://eloking.com/storage/blog-images/OUIj8nVfqlupWeFSO7KF1vUeQte6SxDBKAsfej4C.jpg"
                    slug="test"
                />
            </div>
            <div className="flex flex-wrap lg:gap-0 gap-4 justify-between mt-24">
                <select
                    className="select select-bordered w-full lg:max-w-xs border-2"
                    defaultValue={"Category"}
                >
                    <option disabled>Category</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-full lg:max-w-xs border-2"
                />
            </div>
            <div className="my-12 grid lg:grid-cols-3 gap-x-6 gap-y-12 box-border">
                {(new Array(60).fill(0) as number[]).map((_, i) => (
                    <BlogCard
                        key={i}
                        title="this is a test title that is very long and should be truncated"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita odit ipsa qui incidunt dolorum! This is a test tho lmao!"
                        image="https://eloking.com/storage/blog-images/OUIj8nVfqlupWeFSO7KF1vUeQte6SxDBKAsfej4C.jpg"
                        slug="test"
                    />
                ))}
            </div>
        </BodyContainer>
    );
}
