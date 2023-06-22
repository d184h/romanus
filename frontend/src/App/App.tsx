import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import * as api from "./api";
import MainPage from "../features/MainPage/components/MainPage";
import ThemesList from "../features/Themes/ThemesList";

function App(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    api.goFetch().then((data) => dispatch({ type: "theme/go", payload: data }));
  }, []);
  return (
    <div>
      <ThemesList />
      <MainPage />
    </div>
  );
}

export default App;
