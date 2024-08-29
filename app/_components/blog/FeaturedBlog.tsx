import { FaAngleRight } from "react-icons/fa6";

const FeaturedBlog = ({
    title,
    description,
    image,
    slug,
}: {
    title: string;
    description: string;
    image: string;
    slug: string;
}) => {
    return (
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 p-4 lg:p-12 simple-card !rounded-3xl">
            <figure className="rounded-2xl overflow-hidden h-full">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain"
                />
            </figure>
            <div>
                <a
                    href={"/blog/" + slug}
                    className="hover:underline underline-offset-2 !text-primary"
                >
                    <h2 className="text-[2rem] font-semibold box-border">
                        <span>{title.split(" ")[0]}</span>{" "}
                        <span className="text-primary-gradient">
                            {title.split(" ").slice(1).join(" ")}
                        </span>
                    </h2>
                </a>
                <p className="mt-2 lg:mt-6 mb-3 leading-8 line-clamp-5">
                    {description}
                </p>
                <a
                    href={"/blog/" + slug}
                    className="flex items-center text-primary-gradient font-medium box-border"
                >
                    Read More{" "}
                    <FaAngleRight className="text-primary size-4 ml-1 box-border" />
                </a>
            </div>
        </div>
    );
};

export default FeaturedBlog;
