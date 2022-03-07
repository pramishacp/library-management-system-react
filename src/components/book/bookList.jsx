import React from "react";
import BookItem from "./bookItem";

const BookList = ({ books, onBorrow }) => {
  return (
    <React.Fragment>
      <ul>
        {books.map((book) => {
          return (
            <BookItem
              key={book.id}
              id={book.id}
              name={book.name}
              stock={book.stock}
              onBorrow={onBorrow}
            />
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default BookList;
