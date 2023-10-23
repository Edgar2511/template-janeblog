import React, { useCallback } from "react";
import { useState } from "react";

interface User {
  name: string;
  surename: string;
  email: string;
  password: string;
}

export const AddUser = () => {
  const [user, setUser] = useState<User>({
    email: "",
    name: "",
    password: "",
    surename: "",
  });

  const changeHandler = useCallback((field: keyof User, value: string) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: 300 }}>
      <input
        type="text"
        value={user.name}
        onChange={(e) => changeHandler("name", e.target.value)}
        placeholder="user"
      />
      <input
        type="text"
        value={user.surename}
        onChange={(e) => changeHandler("surename", e.target.value)}
        placeholder="surename"
      />
      <input
        type="text"
        value={user.email}
        onChange={(e) => changeHandler("email", e.target.value)}
        placeholder="email"
      />
      <input
        type="text"
        value={user.password}
        onChange={(e) => changeHandler("password", e.target.value)}
        placeholder="password"
      />
    </div>
  );
};
