import {useEffect,useState} from "react"
import { getRestaurant,saveRestaurants } from "../datautility/storage"
import ReastaurantCard from "../components/ReastaurantCard"
import {useNavigate} from "react-router-dom"
const Admindashboard=()=>{
    const [list,setList]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        setList(getRestaurant)=(id)=>{
            const updated=list.filter(r=>r.restaurantID!==id)
            saveRestaurants(updated)
        }
    })
    return(
        <div>
            <h2>Admin dashboard</h2>
            {list.length===0 && <p>No Restarants</p>}
            {list.map(r=>(
                <ReastaurantCard key={r.restaurantID}
                data={r}
                isAdmin={true}
                onDelete={deleteRestaurant}
                onUpdate={()=>navigate("/admin/restaurants/update",{state:r})}/>
            ))}
        </div>
    )
}
export default Admindashboard