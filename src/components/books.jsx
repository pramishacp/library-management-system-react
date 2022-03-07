import React, { Component } from "react";
import { getBooks } from "../services/bookService";
import { borrowBook } from "../services/borrowService";
import BookList from "./bookList";

class Books extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const { data: books } = await getBooks();
    this.setState({ books });
  }

  handleBorrow = async (bookId) => {
    const originalBooks = this.state.books;

    try {
      await borrowBook("ad72d41c-3e1d-4580-94e8-746031ef7eca", bookId);
      const { data: books } = await getBooks();
      this.setState({ books });
    } catch (ex) {
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
