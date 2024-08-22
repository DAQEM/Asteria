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
        <div className="flex flex-wrap justify-between p-20 bg-base-200 rounded-3xl border-2 border-base-300">
            <figure className="max-w-md rounded-2xl overflow-hidden h-full">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain"
                />
            </figure>
            <div>
                <a href={"/blog/" + slug}>
                    <h2 className=" max-w-80 text-[2rem] font-semibold box-border">
                        <span>{title.split(" ")[0]}</span>{" "}
                        <span className="text-primary-gradient">
                            {title.split(" ").slice(1).join(" ")}
                        </span>
                    </h2>
                </a>
                <p className="mt-6 mb-3 max-w-80 leading-8 line-clamp-5">
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
