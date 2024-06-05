import { useState } from "react";

const ItemForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState(null);
  //send to API
  const handleSubmit = async (e) => {
    //e, event object 
    e.preventDefault(); //reload page using context instead 

    // dummy item object, to be sent as req body
    const item = { title, desc };

    //second arguments is object with an option and its properties. POST REQ
    const response = await fetch('http://localhost:4000/api/items', {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      }
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      //reset Form and error
      setTitle("");
      setDesc("");
      setError(null);

      console.log("new item added", json);
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Item</h3>

      <label>Item Title:</label>
      <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />

      <label>Item Desc:</label>
      <input type="text" onChange={(e) => setDesc(e.target.value)} value={desc} />
      <button>Add Item</button>
      {/* check if error not null, if yes show div */}
      {error && <div className="error">{error}</div>}
    </form>
  );
};
export default ItemForm;
