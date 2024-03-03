import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { useState } from "react";
import { useEffect } from "react";

import React from "react";
import { Link } from "react-router-dom";

function NavListMenu() {
  return (
    <React.Fragment>
      <div className="block lg:hidden"></div>
    </React.Fragment>
  );
}

function NavList() {
  return (

    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Link to="/">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Inicio
        </ListItem>
      </Typography>
      </Link>
      
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link>
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Ayuda
          </ListItem>
        </Link>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl bg-slate-400 px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-dark font-semibold"
        >
          Pets QR
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Link to="/registro">
          <Button
            variant="text"
            size="sm"
            color="blue-gray "
            className=" text-white hover:bg-black hover:text-white border"
            >
            Registro
          </Button>
            </Link>
            <Link to="/login">
          <Button
            variant="gradient"
            size="sm"
            className="text-gray-500 bg-black hover:text-white "
          >
            Ingresar
          </Button>
          </Link>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Link to="/registro" className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button
            variant="outlined"
            size="sm"
            color="blue-gray"
            fullWidth
            className="text-white hover:bg-black hover:text-white border"
            to="/registro"
          >
            Registro
          </Button>
          </Link>
          <Link to="/login" className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            className="text-gray-500 bg-black hover:text-white"
          >
            Ingresar
          </Button>
          </Link>
        </div>
      </Collapse>
    </Navbar>
  );
}
