import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '/components/screens/Home';
import Header from '/components/screens/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App