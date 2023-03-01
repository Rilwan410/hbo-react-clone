import React, { useContext, useState } from "react";
export const StateContext = React.createContext();
import ls from "local-storage";

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
  const [watchList, setWatchList] = useState(ls.get("myList"));

  const addToList = (video) => {
    let myList;
    if (ls("myList") !== null) {
      myList = ls.get("myList");
      myList.push(video);
      ls.set("myList", myList);
      setWatchList(myList);
    } else {
      ls.set("myList", [video]);
    }
  };

  const removeFromList = (videoId) => {
    let myList = ls("myList");
    console.log(myList)
    myList = myList.filter((item) => {
     return  item.mediaId !== videoId;
    });
    ls.set("myList", myList);
    setWatchList(myList);
  };

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
        thumbTypes,
        removeFromList,
        addToList,
        watchList,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export default HBOProvider;
