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
    this.setState({ books });
  }

  handleBorrow = async (bookId) => {
    const originalBooks = this.state.books;
  
    const books = this.state.books.map(book => book.id === bookId ? {...book, stock: book.stock-1 } : book);
    this.setState({ books });
    
    try {
      await borrowBook(this.props.user?.id, bookId);

      toast.success('Book is borrowed successfully');
    } catch (ex) {
      toast.error(ex.response.data);

      this.setState({ books: originalBooks });
    }
  };

  render() {
    const { length } = this.state.books;
    const { books } = this.state;
    const {user} = this.props;

    return (
      <React.Fragment>
        <h2>Books</h2>
        <p>Hey {user?.name}! There are {length} books in the library</p>
        {length === 0 ? null : (
          <BookList books={books} onBorrow={this.handleBorrow} />
        )}
      </React.Fragment>
    );
  }
}

export default Books;
