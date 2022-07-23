import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import classes from './Pagination.module.css';

const PaginatedItems = ({ items = [], children }) =>{
  const itemsPerPage = 3;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <div>
        {currentItems.map((Story) => (
          <div key={Story.id}>
            {Story}
          </div>
        ))}
      </div>
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
}

export default PaginatedItems;

