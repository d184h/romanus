import { Theme } from "../type/type";

export type Action = {
  type: "theme/go";
  payload: Theme[];
};
