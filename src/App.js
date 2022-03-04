import React,{lazy} from "react";
import { Routes, Route , Link } from "react-router-dom";

import Login from './page/login';
import Admin from './page/homeAdmin'

function App() {
  return (
    <div className="container">
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/admin" element={<Admin/>} />
      {/* <PrivateRoute path="/login" component={PrivateRoute} /> */}      
    </Routes>
  </div>
  );
}

export default App;
