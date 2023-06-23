/* eslint-disable import/prefer-default-export */
import { Theme } from "../features/Themes/type/type";

export const goFetch = async (): Promise<Theme[]> => {
  const res = await fetch("/api/themes");
  const data = await res.json();
//   console.log(data, "-----------------");
  return data;
};
