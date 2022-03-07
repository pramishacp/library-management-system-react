import React, { Component } from "react";
import { findBorrowsByUserId } from "../services/borrowService";

class Borrows extends Component {
  state = {
    borrows: [],
  };

  async componentDidMount() {
    const { data: borrows } = await findBorrowsByUserId("ad72d41c-3e1d-4580-94e8-746031ef7eca");
    this.setState({ borrows });
  }

  render() {
    const { length } = this.state.borrows;
    const { borrows } = this.state;

    return (
      <React.Fragment>
        <h2>Borrows</h2>
        <p>{length} books borrowed from the library</p>
        {length === 0 ? null : (
          <ul>
            {borrows.map((borrow) => {
              return (
                <li key={borrow.id}>
                  <h6>
                    {borrow.bookName}
                  </h6>
                  <div>
                    <button>Return</button>
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

export default Borrows;
