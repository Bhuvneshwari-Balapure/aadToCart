import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"



function AdminLayout() {
  return (
    <>
    <Header/>
    <hr size="1" color="black" />
    <Outlet/>
    <hr size="1" color="black" />
    <Footer/>
      
    </>
  )
}

export default AdminLayout
