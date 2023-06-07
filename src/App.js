import "./app.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./containers/Layout";
import {Home} from "./containers/Dashboard/Home";
import Products from "./containers/Dashboard/Products";
function App() {
  return (
    <Routes>
      <Route index element={<Navigate to='/login'/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute redirectPath="/login"/>
        }
      >
          <Route element={<Layout isDashBoard/>}> 
            <Route path="" element={<Home/>} />
            <Route path="products" element={<Products/>} />
          </Route>
      </Route>
    </Routes>
  );
}

export default App;
