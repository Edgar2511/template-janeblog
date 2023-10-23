import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  depositAction,
  increment,
  withdrawAction,
} from "./actions/counterActions";
import React, { FC, useState } from "react";
import { useAppSelector } from "./store/store";

interface CashType {
  cash: number;
}

export const Counter = () => {
  const dispatch = useDispatch();

  const { count } = useAppSelector((state) => state.countReducer);

  //   const itemForRemove = "Garik";

  //   const users = ["Arsen", "Hrayr", "Sergo", "Edo", "Garik", "Vahe"];

  //   const filteredUsers = users.filter((user) => user !== itemForRemove);

  //   const removeUser = (removedUser: string) => {
  //     const filteredUsers = users.filter((user) => user !== removedUser);
  //     dispatch(updateUsersList(filteredUsers));
  //   };

  //   const updateUser = (updatedUser: string) => {
  //     const updatedUsers = users.map((user) => user === updatedUser);
  //     dispatch(updateUsersList(updatedUsers));
  //   };

  const [inputValue, setInputValue] = useState(0);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontSize: "20px" }}>{count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>

        <fieldset
          style={{
            padding: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <input
            type="string"
            value={inputValue}
            onChange={(e) => setInputValue(Number(e.target.value))}
          />
          <button onClick={() => dispatch(depositAction(inputValue))}>
            Deposit
          </button>
          <button onClick={() => dispatch(withdrawAction(inputValue))}>
            Withdraw
          </button>
        </fieldset>
      </div>
    </div>
  );
};
