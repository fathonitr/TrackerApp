import { useEffect, useState } from "react";
import { useItemContext } from "../hooks/useItemContext";

//components
import ItemDetails from "../components/ItemDetails";
import ItemForm from "../components/ItemForm";

const Home = () => {
  const { items, dispatch } = useItemContext();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("http://localhost:4000/api/items");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_ITEMS", payload: json });
      }
    };

    fetchItems();
  }, []);
  return (
    <div className="home">
      <div className="items">
        {/* check if items not null, if yes show itemdetails */}
        {items && items.map((item) => <ItemDetails key={item._id} item={item} />)}
      </div>
      <ItemForm />
    </div>
  );
};
export default Home;
