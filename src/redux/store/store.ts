import { combineReducers, createStore } from "redux";
import { countReducer } from "../reducers/counterReducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";
const reducers = combineReducers({
  countReducer,
});

export const store = createStore(reducers);

type RootState = ReturnType<typeof reducers>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
