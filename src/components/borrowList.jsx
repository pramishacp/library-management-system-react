import React from "react";

import BorrowItem from "./borrowItem";

const BorrowList = ({ borrows }) => {
  return (
    <React.Fragment>
      <ul>
        {borrows.map((borrow) => {
          return <BorrowItem key={borrow.id} bookName={borrow.bookName} />;
        })}
      </ul>
    </React.Fragment>
  );
};

export default BorrowList;
