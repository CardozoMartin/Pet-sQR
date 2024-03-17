import { useState } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { useSession } from "../../store/useSession";
import Swal from "sweetalert2";
import { toast } from "sonner";

const NavBar = () => {
  const { isLoggedIn, logout, user } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Atencion",
      text: "Estas por salir !!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, salir",
      cancelButtonText: "Cancel",
    }).then((res) => {
      if (res.isConfirmed) {
        toast.success("Session cerrada con exito");
        logout();

        Navigate("/login");
      }
    });
  };
  return (
    <header>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center"></div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink
                    className="hover:bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium"
                    to="/"
                    aria-current="page"
                  >
                    Home
                  </NavLink>

                  {!isLoggedIn && (
                    <NavLink
                      to="/registro"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    >
                      Register
                    </NavLink>
                  )}
                 
                  <NavLink
                    to="/mascotas"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    MisMascotas
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              ></button>

              <div className="relative ml-3">
                <div>
                  {!isLoggedIn ? (
                    <Link
                      to="/login"
                      className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    >
                      {" "}
                      Ingresar
                    </Link>
                  ) : (
                    <Link
                      className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                      onClick={handleLogout}
                    >
                      {" "}
                      salir
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLink
              to="/"
              className="hover:bg-gray-700 hover:text-white text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Home
            </NavLink>

            {!isLoggedIn && (
              <NavLink
                to="/registro"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Register
              </NavLink>
            )}
             <NavLink
                    to="/mascotas"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    MisMascotas
                  </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
