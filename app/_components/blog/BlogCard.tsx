import { FaAngleRight } from "react-icons/fa6";

const BlogCard = ({
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
        <div className="card w-full hover:-translate-y-4 transition-transform border-2 border-base-300 hover:border-primary-light hover:border-4 box-border">
            <figure className="[box-shadow:_inset_0_0_0_2px_hsla(0,0%,100%,.1)] box-border rounded-t-[.8rem]">
                <img src={image} alt={title} className="-z-10 box-border" />
            </figure>
            <div className="card-body gap-0 border-t-2 border-base-300 rounded-b-2xl mb-3 box-border">
                <a href={"/blog/" + slug}>
                    <h2 className="text-xl font-medium box-border">
                        <span className="hover:underline underline-offset-1 line-clamp-2">
                            {title}
                        </span>
                    </h2>
                </a>
                <p className="leading-6 text-base my-2 box-border line-clamp-4">
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

export default BlogCard;
