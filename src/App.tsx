import React, { useRef, useEffect, useState, useCallback } from 'react';
import HeaderComponent from "./ui-components/Header/header"
import PopoutBtn from "./ui-components/PopoutBtn/popoutBtn"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from "./pages/Home/home"
import './App.css';

function App() {
  return (
      <Router>
        <div className="page_wrapper">
            <HeaderComponent buttonElement={<PopoutBtn />} />
            <div className="content-wrapper">
                <Routes>
                    <Route index element={<Home />} />
                </Routes>
            </div>
        </div>
      </Router>
  );
}

export default App;
