import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
import { useState } from "react";



const Answer = () => {

    const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (

    <section className="container text-center">
        <h2 className="font-bold mb-3">

        Preguntas Frecuentes
        </h2>
        <>
      <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4 text-center">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors text-center ${
            open === 1 ? "text-blue-500 hover:!text-blue-700 text-center" : ""
          }`}
        >
          Como funciona PetsQR
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          PetsQR es una web que te permite registrar a tus mascotas y poder generar un codigo QR o un PetID.
          Con el QR solamente escanear y ya podrias acceder a los datos de tu mascota y los datos tuyos para poder contactarte.
          con el PetID deberas ingresar a la web y introducir el ID y ahi podras acceder a todos tus datos de contacto e informacion de tu mascotas.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Si cambio alguna informacion de contacto debere generar nuevamente un ID o QR
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          No tendrias que volver a cargar tus mascotas PetsQR te permite editar toda tu informacion todas las veces que necesites para mantener tu informacion actualizada para contactarte
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Quienes pueden acceder a mi informacion personal ?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-ceter ">
          La unica forma de poder ver tu informacion personal de contacto es atravez del QR o el PetID sin ninguno de estos nadie puede ver tu informacion personal
        </AccordionBody>
      </Accordion>
    </>
    </section>
 
  )
}

export default Answer