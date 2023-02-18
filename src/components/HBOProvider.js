import React, { useContext, useState } from "react";
export const StateContext = React.createContext();

export function useStateContext() {
  return useContext(StateContext);
}

export function HBOProvider({ children }) {
  const [user, setUser] = useState("");
  const globalUserImage = "https://randomuser.me/api/portraits/women/30.jpg";
  const createUserAction = (e) => {
    setUser(e.target.value);
  };

  return (
    <StateContext.Provider value={{ user, createUserAction,globalUserImage }}>
      {children}
    </StateContext.Provider>
  );
}

export default HBOProvider;
