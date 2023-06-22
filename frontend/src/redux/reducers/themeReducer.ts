import { Action } from "../../features/Themes/redux/action";
import { State } from "../../features/Themes/type/type";

const initialState: State = { themes: [] };
const themeReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case "theme/go":
      return {
        ...state,
        themes: action.payload,
      };

    default:
      return state;
  }
};
export default themeReducer;
