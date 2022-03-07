import React from "react";

const BorrowItem = ({ bookName }) => {
  return (
    <React.Fragment>
      <li>
        <h6>{bookName}</h6>
        <div>
          <button>Return</button>
        </div>
      </li>
    </React.Fragment>
  );
};

export default BorrowItem;
