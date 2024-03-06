import { jwtDecode } from "jwt-decode";
import { create } from "zustand";

let user = null;
let isLoggedIn = false;

const token = sessionStorage.getItem('token');
if (token) {
  try {
    user = jwtDecode(token).user;
    isLoggedIn = true;
  } catch (e) {
    alert("ocurrio un error, intenta nuevamente perrito malvado")
    sessionStorage.removeItem('token');
  }
}


export const useSession = create((set) => ({
  user,
  isLoggedIn,
  
  login: (newUser) => set({ user: newUser, isLoggedIn: true },console.log(user)),
  logout: () => {
    sessionStorage.removeItem('token');
    set({ user: null, isLoggedIn: false })
  },
}));