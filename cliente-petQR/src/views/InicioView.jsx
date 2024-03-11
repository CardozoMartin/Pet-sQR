import { useQuery } from "@tanstack/react-query";
import { getPetFn } from "../api/pet";
import PetGallery from "../components/petCard/PetGallery";
import PetRegistro from "../components/petRegistro/PetRegistro";
import PetCard from "../components/petCard/PetCard";
import Home from "../components/home/Home";
import { useSession } from "../store/useSession";

const InicioView = () => {
  const { isLoggedIn, logout, user } = useSession();
  const {
    data: pet,
    isError,
    isLoading,
  } = useQuery({ queryKey: ["pet"], queryFn: getPetFn });

  if (isError) {
    return <div>Ocurrio un error al cargar las mascotas</div>;
  }
  return (
    <>
      {isLoggedIn ? (<PetRegistro></PetRegistro>):  (<Home></Home>)}

      {isLoading  ? (
        <h3 className="text-dark mt-3 text-center">Loading...</h3>
      ) : (
        <PetCard pet={pet}></PetCard>
      )}
    </>
  );
};

export default InicioView;
