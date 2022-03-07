import React from "react";

import BorrowItem from "./borrowItem";

const BorrowList = ({ borrows, onReturn }) => {
  return (
    <React.Fragment>
      <ul>
        {borrows.map((borrow) => {
          return (
            <BorrowItem
              key={borrow.id}
              borrowId={borrow.id}
              bookName={borrow.bookName}
              bookId={borrow.bookId}
              userId={borrow.userId}
              onReturn={onReturn}
            />
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default BorrowList;
