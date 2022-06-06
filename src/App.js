import "./scss/app.scss";
import React from "react";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import Cart from "./pages/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export const SearchContext = React.createContext("");

function App() {
  const [searchValue, setSearchValue] = React.useState();

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home searchValue={searchValue} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
