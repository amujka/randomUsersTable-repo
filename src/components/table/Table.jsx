import React, { useMemo } from "react";
import classes from "./Table.module.scss";
import { COLUMNS } from "./tableStructure/Columns";
import SearchBar from "../UI/searchBar/SearchBar";
import { connect } from "react-redux";
import { getUserDetailsAction } from "../../redux/actions/getUserDetailsAction";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import Pagination from "../UI/pagination/Pagination";

const Table = ({ users, viewUserDetails }) => {
  //console.log({ users });
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => users, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    setPageSize,

    canPreviousPage,
    pageOptions,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 50 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const { globalFilter, pageIndex, pageSize } = state;
  //send row id and comapre it to index of user in users array
  const clickHandler = (rowId) => {
    //console.log(rowId);
    viewUserDetails(rowId.id);
  };
  return (
    <>
      {/* pagination nav and searchbar start */}
      <div className={classes.navWrapper}>
        <SearchBar filter={globalFilter} setGlobalFilter={setGlobalFilter} />
        <Pagination
          canPreviousPage={canPreviousPage}
          nextPage={nextPage}
          canNextPage={canNextPage}
          previousPage={previousPage}
          pageOptions={pageOptions}
          pageSize={pageSize}
          setPageSize={setPageSize}
          pageIndex={pageIndex}
        />
      </div>
      {/* pagination nav and search bar end -------------- */}
      {/* react table start */}
      <div className={classes.tableWrapper}>
        <table {...getTableProps()} className={classes.table}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    <div>
                      {column.render("Header")}
                      {/* sorting icons start------ */}
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            //font awesome icons--------------
                            <i className="fas fa-arrow-down"></i>
                          ) : (
                            <i className="fas fa-arrow-up"></i>
                          )
                        ) : (
                          ""
                        )}
                      </span>
                      {/* sorting icons end------ */}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        //  send row id and comapre it to index of user in users array
                        onClick={() => clickHandler(cell.row)}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* React-table end-------------- */}
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    viewUserDetails: (rowId) => {
      dispatch(getUserDetailsAction(rowId));
    },
  };
};
export default connect(null, mapDispatchToProps)(Table);
