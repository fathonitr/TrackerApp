const ItemDetails = ({ item }) => { //deconsturct the prop, that is pass through
    return(
        <div className="item-details">
            <h4>{item.title}</h4>
            <p><strong>Desc: </strong>{item.desc}</p>
            <p>{item.createdAt}</p>
        </div>
    )
}
export default ItemDetails