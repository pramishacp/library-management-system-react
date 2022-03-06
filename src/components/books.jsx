import React, { Component } from "react";
import { getBooks } from "../services/bookService";
import BookList from "./bookList";

class Books extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const { data: books } = await getBooks();
    this.setState({ books });
  }

  handleBorrow = (id) => {
    console.log('handle borrow clicked', id)
  }

  render() {
    const { length } = this.state.books;
    const { books } = this.state;
    
    return (
      <React.Fragment>
        <h2>Books</h2>
        <p>{length} books in the library</p>
        {length === 0 ? null : <BookList books={books} onBorrow={this.handleBorrow}/>}
      </React.Fragment>
    );
  }
}

export default Books;
