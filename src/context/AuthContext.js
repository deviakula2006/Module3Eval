import React from 'react'
import {createContext,useState} from "react"
export  const AuthContext=createContext();
export const AuthProvider=({children})=>{
    const [user,setUser]=useState(
        JSON.parse(localStorage.getItem("user"))||null
    );
    const login =(role)=>{
        costdata={role};
        localStorage.setItem("user",JSON.stringify(data));
        setUser(data);
    }
    const logout=()=>{
        localStorage.removeItem("user");
        setUser(null);
    }
    return (
        <AuthContext.provider value={{user,login,logout}}>
            {children}
        </AuthContext.provider>
    )
}
