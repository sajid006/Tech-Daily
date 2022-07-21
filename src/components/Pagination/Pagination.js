import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import classes from './Pagination.module.css';
// Example items, to simulate fetching from another resources.

const PaginatedItems = ({ items = [], children }) =>{
  // We start with an empty list of items.
  const itemsPerPage = 3;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset} ${items}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    console.log(currentItems);
    console.log(items);
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
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
// Add a <div id="container"> to your HTML to see the componend rendered.
/*
ReactDOM.render(
  <PaginatedItems itemsPerPage={4} />,
  document.getElementById('container')
);
*/
