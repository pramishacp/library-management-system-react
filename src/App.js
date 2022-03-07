import React, { Component } from "react";
import { Route, Navigate, Routes, NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./components/login";
import Home from "./components/home";
import Books from "./components/book/books";
import Borrows from "./components/borrow/borrows";
import NotFound from "./components/notFound";
import RequireAuth from "./components/requireAuth";

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
            <Route
              path="/home"
              element={
                <RequireAuth>
                  <Home user={user} />
                </RequireAuth>
              }
            />
            <Route
              path="/books"
              element={
                <RequireAuth>
                  <Books user={user} />
                </RequireAuth>
              }
            />
            <Route
              path="/borrows"
              element={
                <RequireAuth>
                  <Borrows user={user} />
                </RequireAuth>
              }
            />
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
