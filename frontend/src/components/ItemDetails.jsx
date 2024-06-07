import { useItemContext } from "../hooks/useItemContext";

const ItemDetails = ({ item }) => {
  //deconsturct the item prop, that is pass through

  // just need dispatch function
  const { dispatch } = useItemContext();

  const handleClick = async () => {
    const response = await fetch("http://localhost:4000/api/items/" + item._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_ITEM", payload: json });
    }
  };

  return (
    <div className="item-details">
      <h4>{item.title}</h4>
      <p>
        <strong>Desc: </strong>
        {item.desc}
      </p>
      <p>{item.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
};
export default ItemDetails;
