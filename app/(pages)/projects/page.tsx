import BlogCard from "@/app/_components/blog/BlogCard";
import BodyContainer from "@/app/_components/BodyContainer";

export default function Page() {
    return (
        <>
            <BodyContainer>
                <div className="mt-6 breadcrumbs text-sm">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>Projects</li>
                    </ul>
                </div>
            </BodyContainer>
            <BodyContainer>
                <div className="mt-12">
                    <h1 className="text-5xl font-semibold">
                        <span>DAQEM Studios Blog</span>
                    </h1>
                    <p className="mt-6 max-w-2xl">
                        At DAQEM Studios, we are constantly innovating and
                        developing new projects. Here, you can stay updated with
                        our latest projects, tutorials, and other engaging
                        articles.
                    </p>
                </div>
            </BodyContainer>
            <BodyContainer type="full" className="py-12 mt-12">
                <BodyContainer
                    type="narrow"
                    className="grid grid-rows-[3rem,1fr]"
                >
                    <div className="flex justify-between">
                        <select className="select select-bordered w-full max-w-xs border-2">
                            <option disabled selected>
                                Category
                            </option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Search here"
                            className="input input-bordered w-full max-w-xs border-2"
                        />
                    </div>
                    <div className="mt-12 grid lg:grid-cols-3 gap-x-6 gap-y-12">
                        {(new Array(60).fill(0) as number[]).map((_, i) => (
                            <BlogCard
                                key={i}
                                title="Test"
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita odit ipsa qui incidunt dolorum suscipit cumque aliquid perferendis voluptatibus non!"
                                image="https://eloking.com/storage/blog-images/OUIj8nVfqlupWeFSO7KF1vUeQte6SxDBKAsfej4C.jpg"
                                slug="test"
                            />
                        ))}
                    </div>
                </BodyContainer>
            </BodyContainer>
        </>
    );
}
