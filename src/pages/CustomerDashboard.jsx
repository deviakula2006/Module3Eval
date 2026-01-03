import {useEffect,useState,useRef} from "react"
import { getRestaurant } from "../datautility/storage"
import ReastaurantCard from "../components/ReastaurantCard"
import {useNavigate} from "react-router-dom"
const CustomerDashboard=()=>{
    const [list,setList]=useState([]);
    const searchref=useRef();
    useEffect(()=>{
        setList(getRestaurants())
        searchref.current.focus();

    },[])
    return (
        <div>
            <h2>
                Customer Dashboard
            </h2>
            <input ref={searchRef} placeholder="Search"/>
            {list.map(r=>(
                <ReastaurantCard
                key ={r.restaurantID} data={r}/>

            ))}
        </div>
    )
}
export default CustomerDashboard