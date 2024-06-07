// This custom hook is created so it can be cleaner and faster to use the ItemContext

import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

export const useItemContext = () => {
  const context = useContext(ItemContext);

  if (!context) {
    throw Error("useItemContext must be inside an itemContextProvider");
  }

  //return state and dispatch
  return context;
};
