import React from "react";

const BorrowList = ({ borrows }) => {
  return (
    <React.Fragment>
      <ul>
        {borrows.map((borrow) => {
          return (
            <li key={borrow.id}>
              <h6>{borrow.bookName}</h6>
              <div>
                <button>Return</button>
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default BorrowList;
