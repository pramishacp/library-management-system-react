import React from "react";

const BookItem = ({ id, name, stock, onBorrow }) => {
  return (
    <React.Fragment>
      <li>
        <h6>
          {name} <span className="badge-primary">{stock} in stock</span>
        </h6>
        <div>
          <button onClick={() => onBorrow(id)}>Borrow</button>
        </div>
      </li>
    </React.Fragment>
  );
};

export default BookItem;
