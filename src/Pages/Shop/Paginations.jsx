/* eslint-disable react/prop-types */

import "./Pagination.css";

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }
    return (
        <div className="flex justify-center gap-5">
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={`btn text-xl font-semibold ${page == currentPage ? "text-red-400" : ""}`}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;