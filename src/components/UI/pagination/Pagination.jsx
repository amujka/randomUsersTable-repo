import React from "react";
import classes from "./Pagination.module.scss";
const Pagination = ({
  previousPage,
  canPreviousPage,
  pageOptions,
  nextPage,
  canNextPage,
  pageSize,
  setPageSize,
  pageIndex,
}) => {
  return (
    //  {/* pagination nav and searchbar -------------- */}
    <div className={classes.NavBtnsWrapper}>
      {/* set page size start */}
      <div className={classes.pageSize}>
        <span>Page size:</span>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((size) => {
            return (
              <option value={size} key={size}>
                {size}
              </option>
            );
          })}
        </select>
      </div>
      {/* set page size end */}
      {/* pagination nav start */}
      <div className={classes.pageNav}>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Prev
        </button>
        <span>
          {" "}
          <strong>
            {" "}
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>
      {/* pagination nav end */}
    </div>
  );
};

export default Pagination;
