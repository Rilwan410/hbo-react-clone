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
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const thumbTypes = ["large-v", "small-v", "large-h", "small-h"];
  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        createUserAction,
        globalUserImage,
        sideNavOpen,
        setSideNavOpen,
        accountOpen,
        setAccountOpen,
        searchOpen,
        setSearchOpen,
        thumbTypes
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export default HBOProvider;
