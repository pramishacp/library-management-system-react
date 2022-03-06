import React from "react";
import BookItem from "./bookItem";

const BookList = ({ books }) => {
  return (
    <React.Fragment>
      <ul>
        {books.map((book) => {
          return <BookItem id={book.id} name={book.name} stock={book.stock} />;
        })}
      </ul>
    </React.Fragment>
  );
};

export default BookList;
