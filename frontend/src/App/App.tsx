import ThemesList from "../features/Themes/ThemesList";
import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch } from "react-redux";
import * as api from "./api";
import NavBar from "../features/NavBar/components/NavBar";
// import Error from '../features/404/Error';
import Registration from "../features/auth/Registration";
import Login from "../features/auth/Login";
import MainPage from "../features/MainPage/components/MainPage";

function App(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    api.goFetch().then((data) => dispatch({ type: "theme/go", payload: data }));
  }, []);

  useEffect(() => {
    fetch("/api/auth/check")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "auth/check", payload: data }));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<ThemesList />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Route>
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </div>
  );
}

export default App;
