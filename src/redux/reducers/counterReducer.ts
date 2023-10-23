import { COUNTER_TYPES } from "../actions/actionTypes";

interface CounterState {
  count: number;
}

interface Action {
  type: COUNTER_TYPES;
  payload: number;
}

const initialState: CounterState = {
  count: 0,
};

export const countReducer = (
  state = initialState,
  action: Action
): CounterState => {
  switch (action.type) {
    case COUNTER_TYPES.INCREMENT:
      return { ...state, count: state.count + 1 };
    case COUNTER_TYPES.DECREMENT:
      return { ...state, count: state.count - 1 };
    case COUNTER_TYPES.DEPOSIT:
      return { ...state, count: state.count + action.payload };
    case COUNTER_TYPES.WITHDRAW:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};
