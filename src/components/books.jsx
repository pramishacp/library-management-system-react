import React, { Component } from "react";
import { toast } from "react-toastify";

import { getBooks } from "../services/bookService";
import { borrowBook } from "../services/borrowService";
import BookList from "./bookList";

class Books extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const { data: books } = await getBooks();
    console.log('books', books)
    this.setState({ books });
  }

  handleBorrow = async (bookId) => {
    const originalBooks = this.state.books;
  
    const books = this.state.books.map(book => book.id === bookId ? {...book, stock: book.stock-1 } : book);
    this.setState({ books });
    
    try {
      await borrowBook("ad72d41c-3e1d-4580-94e8-746031ef7eca", bookId);

      toast.success('Book is borrowed successfully');
    } catch (ex) {
      toast.error(ex.response.data);

      this.setState({ books: originalBooks });
    }
  };

  render() {
    const { length } = this.state.books;
    const { books } = this.state;

    return (
      <React.Fragment>
        <h2>Books</h2>
        <p>{length} books in the library</p>
        {length === 0 ? null : (
          <BookList books={books} onBorrow={this.handleBorrow} />
        )}
      </React.Fragment>
    );
  }
}

export default Books;
