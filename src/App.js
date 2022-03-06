import React, { Component } from "react";
import { Route, Navigate, Routes } from "react-router-dom";

import Library from "./components/library";
import NotFound from "./components/notFound";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/library" element={<Library />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route exact path="/" element={<Navigate to="/library" />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
