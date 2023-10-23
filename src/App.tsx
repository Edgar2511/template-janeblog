import "./App.css";
import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { useDispatch, useSelector } from "react-redux";
import { Counter } from "./redux/Counter";
import { AddUser } from "./Components/AddUser";

function App() {
  return (
    <div className="App">
      <Counter />
      <AddUser />
    </div>
  );
}

export default App;
