import {  Routes } from "react-router"
import { BrowserRouter, Route } from "react-router-dom"

import  { FooterWithSocialLinks } from "./components/common/Footer"
import { NavbarWithMegaMenu } from "./components/common/Navbar"
import InicioView from "./views/InicioView"
import RegistroView from "./views/RegistroView"
import LoginView from "./views/LoginView"
import { ToastContainer } from "react-toastify"



const Router = () => {
  return (
    <>
     <BrowserRouter>
        <NavbarWithMegaMenu/>
      <main className="bg-gray-100">

        <Routes>
          {/*<Route exact path="/" element={} />*/ }
          <Route exact path="/" element={<InicioView/>}></Route>
          <Route exact path="/registro" element={<RegistroView/>}></Route>

          <Route exact path="/login" element={<LoginView/>}></Route>


        </Routes>
      </main>
        <ToastContainer />
      <FooterWithSocialLinks></FooterWithSocialLinks>
      
      </BrowserRouter>
    </>
  )
}

export default Router