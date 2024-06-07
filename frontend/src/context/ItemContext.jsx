import { createContext, useReducer } from "react";

export const ItemContext = createContext();

//define reducer function
const itemReducer = (state, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return {
        items: action.payload,
      };
    case "ADD_ITEM":
      return {
        //add the new item, then copying the existing items
        items: [action.payload, ...state.items],
      };
    // default case, when none case matched
    default:
      return state;
  }
};

export const ItemContextProvider = ({ children }) => {
  // reducer funtction and initial value for state
  const [state, dispatch] = useReducer(itemReducer, {
    items: null,
  });
  return (
    //spread the state to get items: property
    <ItemContext.Provider value={{ ...state, dispatch }}>{children}</ItemContext.Provider>
  );
};
