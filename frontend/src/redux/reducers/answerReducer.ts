import { Action } from '../../App/types/Action';
import { Answer } from '../../features/CardPage/types/Answer';

const initialState: AuthState = {
  user: undefined,
};

const answerReducer = (
  state: Answer = initialState,
  action: Action
): Answer => {
  switch (action.type) {
    case 'answer/check':
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default answerReducer;
