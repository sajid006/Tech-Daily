import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import classes from "./Pagination.module.css";

const PaginatedItems = (props) => {
  const [currentItems, setCurrentItems] = useState(props.items);
  const [pageCount, setPageCount] = useState(props.pageCount);
  const [itemOffset, setItemOffset] = useState(props.pageNumber);
  useEffect(() => {
    setCurrentItems(props.items);
    setPageCount(props.pageCount);
    setItemOffset(props.pageNumber);
  }, [props]);

  const handlePageClick = (event) => {
    //console.log(event.selected+1);
    props.changePageNumber(event.selected+1);
  };

  return (
    <>
      {currentItems && currentItems.map((Story) => (
        <div key={Story.id}>{Story}</div>
      ))}

      <ReactPaginate
        className={`${classes.container}`}
        previousClassName={`${classes.previousClass}`}
        pageClassName={`${classes.pageClass}`}
        breakClassName={`${classes.breakClass}`}
        nextClassName={`${classes.nextClass}`}
        activeClassName={`${classes.activeClass}`}
        disabledClassName={`${classes.disabledClass}`}
        previousLinkClassName={`${classes.previousLinkClass}`}
        pageLinkClassName={`${classes.pageLinkClass}`}
        breakLinkClassName={`${classes.breakLinkClass}`}
        nextLinkClassName={`${classes.nextLinkClass}`}
        activeLinkClassName={`${classes.activeLinkClass}`}
        disabledLinkClassName={`${classes.disabledLinkClass}`}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );

};

export default PaginatedItems;
