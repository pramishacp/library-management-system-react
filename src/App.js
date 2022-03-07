import React, { Component } from "react";
import { Route, Navigate, Routes, NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./components/login"
import Home from "./components/home";
import Books from "./components/books";
import Borrows from "./components/borrows";
import NotFound from "./components/notFound";

import auth from "./services/authService";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    console.log("APP-", user);

    return (
      <React.Fragment>
        <ToastContainer />
        <h1>Library</h1>
        <ul className="header">
          <li>
            <NavLink exact="true" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/books">All Books</NavLink>
          </li>
          <li>
            <NavLink to="/borrows">All Borrowed</NavLink>
          </li>
        </ul>
        <div className="content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home user={user} />} />
            <Route path="/books" element={ <Books user={user} />} />
            <Route path="/borrows" element={<Borrows user={user} />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route exact path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
