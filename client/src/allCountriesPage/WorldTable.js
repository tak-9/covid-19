import React from "react";
import { useTable, useSortBy, usePagination } from "react-table";
/**
 * As in the previous versions, a react-table accepts colums where at the core we have a field Header, and accessor
 * As in the previous versions, a react-table has data that consist of an array of JSONs
 */
const ReactTable = ({ columns, data }) => {
  // you can get the react table functions by using the hook useTable
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    //rows,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    prepareRow,
  } = useTable({
    columns,
    data
}, 
    useSortBy,
    usePagination
  );


  return (
      <>
    <table className="table table-striped" {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => {
              const {render, getHeaderProps} = column
              return (
                // <th {...getHeaderProps()}>{render("Header")}</th>
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                {/* Add a sort arrow icon */}
                &nbsp;<i class="fas fa-sort"></i>
              </th>
              )
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>

    <div className="pagination">
    <button className="btn btn-info mr-1" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
    {'<<'}
    </button> 
    <button className="btn btn-info mr-1" onClick={() => previousPage()} disabled={!canPreviousPage}>
    {'<'}
    </button>
    <button className="btn btn-info mr-1" onClick={() => nextPage()} disabled={!canNextPage}>
    {'>'}
    </button>
    <button className="btn btn-info mr-1" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
    {'>>'}
    </button>

    &nbsp;&nbsp;Page&nbsp;
    <span className="font-weight-bold">
        {pageIndex + 1} of {pageOptions.length}
    </span>&nbsp;
    | Go to page: &nbsp;
    <input
        type="number"
        defaultValue={pageIndex + 1}
        onChange={e => {
        const page = e.target.value ? Number(e.target.value) - 1 : 0
        gotoPage(page)
        }}
        className="form-control mr-1"
        style={{ width: '100px' }}
    />

    {/* <select
    className="form-control"
    style={{ width: '110px' }}
    value={pageSize}
    onChange={e => {
        setPageSize(Number(e.target.value))
    }}
    >
    {[10, 20, 30, 40, 50].map(pageSize => (
        <option 
        key={pageSize} value={pageSize}>
        Show {pageSize}
        </option>
    ))}
    </select> */}
    </div>
    </>


  );
};

export default ReactTable;