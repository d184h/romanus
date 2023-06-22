import React from "react";
import { Theme } from "./type/type";

function ThemesItem({ theme }: { theme: Theme }): JSX.Element {
  return <div>{theme.name}</div>;
}
export default ThemesItem;
