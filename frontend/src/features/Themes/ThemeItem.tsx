import React from "react";
import { Theme } from "./type/type";
import QuestionItem from "../Questions/QuestionItem";

function ThemesItem({ theme }: { theme: Theme }): JSX.Element {
  return (
    <div className="theme">
      <div>{theme.name}</div>
      {theme.Questions.map((question) => (
        <QuestionItem question={question} key={question.id} />
      ))}
    </div>
  );
}
export default ThemesItem;
