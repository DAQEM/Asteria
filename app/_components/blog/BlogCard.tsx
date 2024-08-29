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
        <div className="simple-card !p-0 overflow-hidden hover:-translate-y-4 transition-transform hover:border-primary-light">
            <figure>
                <img src={image} alt={title} className="-z-10" />
            </figure>
            <div className="card-body gap-0 border-t-2 border-base-300 rounded-b-2xl mb-3">
                <a href={"/blog/" + slug}>
                    <h2 className="text-xl font-medium">
                        <span className="hover:underline underline-offset-1 line-clamp-2">
                            {title}
                        </span>
                    </h2>
                </a>
                <p className="leading-6 text-base my-2 line-clamp-4">
                    {description}
                </p>
                <a
                    href={"/blog/" + slug}
                    className="flex items-center text-primary-gradient font-medium"
                >
                    Read More{" "}
                    <FaAngleRight className="text-primary size-4 ml-1" />
                </a>
            </div>
        </div>
    );
};

export default BlogCard;
