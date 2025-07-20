import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import User from "./User";
import Admin from "./Admin";
import AdmissionForm from "./AdmissionForm";

const App = () => {
  return (
    // <BrowserRouter>
    //   <div>
    //       <Link to="/">User</Link> <br/>
    //       <Link to="/admin">Admin</Link>
  
    //     <Routes>
    //       <Route path="/" element={<User />} />
    //       <Route path="/admin" element={<Admin />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>

    <AdmissionForm/>
  );
};

export default App;
