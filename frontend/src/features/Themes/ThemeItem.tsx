import React from "react";
import { Theme } from "./type/type";

function ThemesItem({ theme }: { theme: Theme }): JSX.Element {
  return (
    <div>
      {theme.name}
      {theme.Questions.map((question) => question.count)}
    </div>
  );
}
export default ThemesItem;
