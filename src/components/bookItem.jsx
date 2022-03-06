import React from "react";

const BookItem = ({ id, name, stock }) => {
  return (
    <React.Fragment>
      <li key={id}>
        <h6>
          {name} <span className="badge-primary">{stock} in stock</span>
        </h6>
        <div>
          <button>Borrow</button>
        </div>
      </li>
    </React.Fragment>
  );
};

export default BookItem;
