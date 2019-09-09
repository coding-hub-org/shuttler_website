import React,{useState} from 'react';
 
import Admin from '../Admin/Admin';
import AdminLogin from '../AdminLogin/AdminLogin';

const AdminRoute = (props) =>{
    const [auth,setAuth]=useState(false);
    return(
        (auth)?<Admin/>:<AdminLogin/>
    );
}

export default AdminRoute;