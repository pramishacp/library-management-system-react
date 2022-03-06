import React, { Component } from "react";
import { Route, Navigate, Routes, Link } from "react-router-dom";

import Home from "./components/home";
import Books from "./components/books";
import Borrows from "./components/borrows";
import NotFound from "./components/notFound";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <h1>Library</h1>
      <ul className="header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">All Books</Link>
        </li>
        <li>
          <Link to="/borrows">All Borrowed</Link>
        </li>
      </ul>
      <div className="content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/borrows" element={<Borrows />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
