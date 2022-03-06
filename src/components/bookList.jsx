import React from "react";

const BookList = ({books}) => {
  return (
      <React.Fragment>
        <ul>
            {books.map((book) => {
              return (
                <li key={book.id}>
                  <h6>
                    {book.name}{" "}
                    <span className="badge-primary">{book.stock} in stock</span>
                  </h6>
                  <div>
                    <button>Borrow</button>
                  </div>
                </li>
              );
            })}
        </ul>
      </React.Fragment>
  )
};

export default BookList;
