import React, { Component } from "react";
import { getBooks } from "../services/bookService";

class Books extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const { data: books } = await getBooks();
    this.setState({ books });
  }

  render() {
    const { length } = this.state.books;
    const { books } = this.state;

    return (
      <React.Fragment>
        <h2>Books</h2>
        <p>{length} books in the library</p>
        {length === 0 ? null : (
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
        )}
      </React.Fragment>
    );
  }
}

export default Books;
