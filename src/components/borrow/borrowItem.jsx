import React from "react";

const BorrowItem = ({ borrowId, userId, bookId, bookName, onReturn }) => {
  return (
    <React.Fragment>
      <li>
        <h6>{bookName}</h6>
        <div>
          <button onClick={() => onReturn(borrowId, userId, bookId)}>
            Return
          </button>
        </div>
      </li>
    </React.Fragment>
  );
};

export default BorrowItem;
