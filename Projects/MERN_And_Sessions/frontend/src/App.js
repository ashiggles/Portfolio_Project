import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import AccountList from "./components/accountList";
import Edit from "./components/edit";
import Create from "./components/create";
import Login from "./components/login";
import View from "./components/userAccount";
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<AccountList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
       <Route path="/login" element={<Login />} />
       <Route path="/view/:id" element={<View />} />
     </Routes>
   </div>
 );
};
 
export default App;