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
    case "DELETE_ITEM":
      console.log("ID to be deleted: " + action.payload._id)
      return {
        // filter through the current items in state
        items: state.items.filter(i => i._id !== action.payload._id),
      };
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
