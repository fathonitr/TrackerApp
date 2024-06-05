import { useEffect, useState } from "react"

//components 
import ItemDetails from '../components/ItemDetails'
import ItemForm from "../components/ItemForm"
const Home = () => {
    const [items, setItems] = useState(null)
    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch('http://localhost:4000/api/items')
            const json = await response.json()

            if(response.ok){
                setItems(json)
            }
        }

        fetchItems()
    }, [])
    return (
        <div className="home">
            <div className="items">
                {/* check if items not null, if yes show itemdetails */}
                {items && items.map((item) => (
                    <ItemDetails key={item._id} item={item} />
                    
                ))}
            </div>
            <ItemForm />
        </div>
    )
}
export default Home