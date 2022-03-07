import React from "react";

const BorrowItem = ({ userId, bookId, bookName, onReturn }) => {
  return (
    <React.Fragment>
      <li>
        <h6>{bookName}</h6>
        <div>
          <button onClick={() => onReturn(userId, bookId)}>Return</button>
        </div>
      </li>
    </React.Fragment>
  );
};

export default BorrowItem;
