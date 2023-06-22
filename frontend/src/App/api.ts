import { Theme } from "../features/Themes/type/type";

export const goFetch = async (): Promise<Theme[]> => {
  const res = await fetch("theme/go");
  const data = await res.json();
  return data;
};
