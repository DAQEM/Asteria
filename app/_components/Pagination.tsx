import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Pagination = ({
    page,
    maxPage,
    urlCreator,
}: {
    page: number;
    maxPage: number;
    urlCreator: (page: number) => string;
}) => {
    return (
        <div className="join grid grid-cols-[3rem,1fr,3rem] max-w-64 w-full rounded-full">
            <a
                href={urlCreator(page - 1)}
                className={
                    "join-item w-12 btn light-border hover:border-primary hover:!border-2 hover:z-10 " +
                    (page === 1 ? "disabled" : "")
                }
            >
                <FaAngleDoubleLeft className="size-4" />
            </a>
            <details className="dropdown join-item w-full btn p-0 light-border border-x-0 hover:border-primary hover:!border-2 hover:z-10">
                <summary className="btn bg-transparent hover:bg-transparent border-0 w-full">
                    Page {page}
                </summary>
                <ul className="-left-12 mt-2 light-border dropdown-content bg-base-200 rounded-box z-50 w-64 p-2 shadow grid grid-cols-5 gap-2">
                    {Array.from({ length: maxPage }, (_, i) => (
                        <li
                            key={i}
                            className="aspect-square bg-base-300 rounded-box flex justify-center items-center"
                        >
                            <a href={urlCreator(i + 1)}>{i + 1}</a>
                        </li>
                    ))}
                </ul>
            </details>
            <a
                href={urlCreator(page + 1)}
                className={
                    "join-item w-12 btn light-border hover:border-primary hover:!border-2 hover:z-10 " +
                    (page === maxPage ? "disabled" : "")
                }
            >
                <FaAngleDoubleRight className="size-4" />
            </a>
        </div>
    );
};

export default Pagination;