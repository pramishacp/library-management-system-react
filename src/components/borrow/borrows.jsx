import React, { Component } from "react";
import { toast } from "react-toastify";

import BorrowList from "./borrowList";
import { findBorrowsByUserId, returnBook } from "../../services/borrowService";

class Borrows extends Component {
  state = {
    borrows: [],
  };

  async componentDidMount() {
    const { data: borrows } = await findBorrowsByUserId(this.props.user?.id);
    this.setState({ borrows });
  }

  handleReturn = async (borrowId, userId, bookId) => {
    const originalBorrows = this.state.borrows;
  
    const borrows = originalBorrows.filter(b => b.id !== borrowId);
    this.setState({ borrows });
    
    try {
      await returnBook(userId, bookId);

      toast.success('Book is returned successfully');
    } catch (ex) {
      toast.error(ex.response.data);

      this.setState({ borrows: originalBorrows });
    }
  }

  render() {
    const { length } = this.state.borrows;
    const { borrows } = this.state;
    const {user} = this.props;
    
    return (
      <React.Fragment>
        <h2>Borrows</h2>
        <p>Hey {user?.name}! You borrowed {length} books from the library</p>
        {length === 0 ? null : <BorrowList borrows={borrows} onReturn={this.handleReturn}></BorrowList>}
      </React.Fragment>
    );
  }
}

export default Borrows;
