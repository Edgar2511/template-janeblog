import { COUNTER_TYPES } from "./actionTypes";

export const increment = () => ({
  type: COUNTER_TYPES.INCREMENT,
});

export const decrement = () => ({
  type: COUNTER_TYPES.DECREMENT,
});

export const depositAction = (payload: number) => ({
  type: COUNTER_TYPES.DEPOSIT,
  payload,
});

export const withdrawAction = (payload: number) => ({
  type: COUNTER_TYPES.WITHDRAW,
  payload,
});
