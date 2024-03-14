import {  Routes } from "react-router"
import { BrowserRouter, Route } from "react-router-dom"

import  { FooterWithSocialLinks } from "./components/common/Footer"
import NavBar from "./components/common/Navbar"
import InicioView from "./views/InicioView"
import RegistroView from "./views/RegistroView"
import LoginView from "./views/LoginView"
import { ToastContainer } from "react-toastify"
import { Toaster } from "sonner"
import PetInfo from "./components/petCard/PetInfo"
import { useSession } from "./store/useSession"
import PetIdView from "./views/PetIdView"
import QRCodeGenerator from "./components/QRCodeGenerator"
import PetsView from "./views/PetsView"



const Router = () => {
  const { user, isLoggedIn } = useSession();
  return (
    <>
     <BrowserRouter>
        <NavBar/>
      <main className="bg-gray-100">

        <Routes>
          {/*<Route exact path="/" element={} />*/ }
          <Route exact path="/" element={<InicioView/>}></Route>
          <Route exact path="/registro" element={isLoggedIn ? <InicioView/> : <RegistroView/>}></Route>

          <Route exact path="/login" element={<LoginView/>}></Route>
          <Route exact path="/info" element={<PetInfo/>}></Route>
          <Route exact path="/infoPet" element={<PetIdView/>}></Route>
          <Route exact path="/Qr" element={<QRCodeGenerator/>}></Route>
          <Route exact path="/mascotas" element={<PetsView/>}></Route>






        </Routes>
      </main>
      <Toaster position="top-right" richColors />
      <FooterWithSocialLinks></FooterWithSocialLinks>
      
      </BrowserRouter>
    </>
  )
}

export default Router