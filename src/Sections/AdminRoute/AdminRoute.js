import React,{useState} from 'react';
 
import Admin from '../Admin/Admin';
import AdminLogin from '../AdminLogin/AdminLogin';
import {authStateChange} from "../../components/Firebase/firebase";
const AdminRoute = (props) =>{
    const [auth,setAuth]=useState(false);
    authStateChange(setAuth);
    return(
        (auth)?<Admin/>:<AdminLogin/>
    );
}

export default AdminRoute;