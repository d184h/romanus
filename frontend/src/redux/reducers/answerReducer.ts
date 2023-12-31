import { Action } from '../../App/types/Action';
import { Answer } from '../../features/CardPage/types/Answer';

const initialState: Answer = {
  answer: '',
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
