import Image from "next/image";

const DiscountBanner = ({ showIcons, r }: { showIcons?: boolean, r: string }) => {
    return (
        <section className="bg-base-300 border-y-2 border-y-[rgba(255,255,255,0.08)] flex justify-center items-center py-2">
            <a
                className="flex gap-3 hover:scale-105 ease-in-out duration-200 underline underline-offset-[3px] px-4"
                href={"https://bisecthosting.com/DAQEM?r=" + r}
                target="_blank"
            >
                {showIcons && (
                    <div className="h-6 aspect-[1600/771]">
                        <Image
                            src="/images/logo/daqem_studios.png"
                            width={1600}
                            height={771}
                            alt="DAQEM Logo"
                        />
                    </div>
                )}
                <div className="text-center">
                    Use code <span className="font-bold">DAQEM</span> for 25%
                    off your first order!
                </div>
                {showIcons && (
                    <div className="h-6 aspect-square">
                        <Image
                            src="/images/logo/bh.svg"
                            width={1600}
                            height={771}
                            alt="DAQEM Logo"
                        />
                    </div>
                )}
            </a>
        </section>
    );
};

export default DiscountBanner;
