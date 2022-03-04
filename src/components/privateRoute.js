import React  from 'react'
import {  Route } from 'react-router'
import { Link } from 'react-router-dom';


let auth ;
auth = true;
auth=null;

const PrivateRoute=({component, ...rest})=>{
  return(<Route {...rest}>{auth?<component/>:<Link to="/"/>}
  </Route>)
}

export default PrivateRoute