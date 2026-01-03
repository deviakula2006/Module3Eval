import React ,{useContext,useState} from "react"
import {useNavigate} from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
const Login =()=>{
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
        const {login}=useContext(AuthContext);
        const navigate=useNavigate();
        const handleLogin = ()=>{
            if(email==="admin@gmail.com" && password==="admin1234"){
                login("admin");
                navigate("/admin/dashboard")
            }
            else  if(email==="customer@gmail.com" && password==="customer1234"){
                login("customer");
                navigate("/customer/dashboard")
            }
            else {
                alert("invalid credentials")
            }
        }
    return(
        <div>
            <h2>
                Login
            </h2>
            <input placeholder="Email"  type="text" name="email" onChange={(e)=>setEmail(e.target.value)}/>
             <input placeholder="password" type="text" name="password" onChange={(e)=>setEmail(e.target.value)}/>
            <button onClick={handleLogin}>
                Login
            </button>

        </div>
    )
}
export default Login;