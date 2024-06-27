import React from "react"
import {Route, Routes} from "react-router-dom"
import HomePage from "../homePage/HomePage";
import DoctorPage from "../pages/DoctorPage";
import UslugPage from "../pages/UslugPage";
import EditProduct from "../components/product/EditProduct";
import AddProduct from "../components/product/AddProduct";
export const ADMIN_ROUTES = [
  // {id: 1, link: "/admin", element: <AdminPage />}
  {id: 2, link: "/edit/:id", element: <EditProduct />},
  {id: 3, link: "/add", element: <AddProduct />},
]
const PUBLIC_POUTES = [
  { id: 1, link: "/", element: <HomePage /> },
  { id: 2, link: "/doctor", element: <DoctorPage /> },
  { id: 3, link: "/service", element: <UslugPage /> },
];  

const MainRoutes = () => {
  return (
    <Routes>
      {PUBLIC_POUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
    </Routes>
  )
}

export default MainRoutes
