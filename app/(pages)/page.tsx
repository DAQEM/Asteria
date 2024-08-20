import Image from "next/image";
import { FaCompass } from "react-icons/fa6";
import BodyContainer from "../_components/BodyContainer";
import HomeThemeSwitch from "../_components/HomeThemeSwitch";
import HomeCornerSvg from "../_components/svg/HomeCornerSvg";

export default async function Home() {
    return (
        <main>
            <BodyContainer className="grid lg:grid-cols-2 grid-cols-1 lg:mt-24 mt-12">
                <div className="max-w-xl">
                    <div className="mb-6 flex items-center gap-3 font-medium">
                        <p className="text-lg">
                            <span>I&apos;m a</span>
                        </p>
                        <HomeThemeSwitch />
                    </div>
                    <div className="relative h-[36rem]">
                        <div className="h-max group-data-[theme=developer]/theme:opacity-0 opacity-100 transition-opacity duration-300 absolute inset-0 grid gap-6">
                            <h2 className="text-4xl md:text-6xl font-bold text-primary-gradient">
                                Dive into a World of Wonder!
                            </h2>
                            <p className="text-xl">
                                Embark on epic adventures with our amazing
                                modpacks. Experience gaming like never before,
                                filled with wonder and excitement.
                            </p>
                            <a
                                href="/projects"
                                className="btn btn-primary lg:w-fit text-base"
                            >
                                <FaCompass className="size-6 mr-1" />
                                Explore Projects
                            </a>
                        </div>
                        <div className="h-max group-data-[theme=developer]/theme:opacity-100 opacity-0 transition-opacity duration-300 absolute inset-0 grid gap-6">
                            <h2 className="text-4xl md:text-6xl font-bold text-primary-gradient">
                                Your Vision, Our Mission!
                            </h2>
                            <p className="text-xl">
                                We&apos;re dedicated to bringing your creative
                                ideas to life. We&apos;ve built a lot of useful
                                libraries and tools to help you get started.
                            </p>
                            <a
                                href="/projects"
                                className="btn btn-primary lg:w-fit text-base"
                            >
                                <FaCompass className="size-6 mr-1" />
                                Explore Projects
                            </a>
                        </div>
                    </div>
                </div>
                <div className="lg:block hidden">
                    <div className="absolute right-0 top-0 -z-10 w-[48rem]">
                        <HomeCornerSvg />
                    </div>
                    <div className="relative w-[32rem]">
                        <Image
                            className="group-data-[theme=developer]/theme:opacity-0 opacity-100 transition-opacity duration-300 absolute inset-0"
                            src="/images/minecraft_art/floating_island_artwork_1.png"
                            alt="Floating Minecraft Island"
                            width={611}
                            height={605}
                        />
                        <Image
                            className="group-data-[theme=developer]/theme:opacity-100 opacity-0 transition-opacity duration-300 absolute inset-0"
                            src="/images/minecraft_art/floating_island_artwork_2.png"
                            alt="Floating Minecraft Island"
                            width={651}
                            height={762}
                        />
                    </div>
                </div>
            </BodyContainer>
        </main>
    );
}
