
import { Route, Routes } from "react-router-dom";
import Orders from "../../pages/orders";
import Customers from "../../pages/customers";
import Dashboard from "../../pages/dashboard";
import Inventory from "../../pages/inventory";

function AppRoutes() {
  return (
    
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/inventory" element={<Inventory/>}></Route>
      <Route path="/orders" element={<Orders/>}></Route>
      <Route path="/customers" element={<Customers/>}></Route>
    </Routes>
  
  )
}
export default AppRoutes;