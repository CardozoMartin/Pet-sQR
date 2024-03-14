import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getPetByIdFn } from "../api/pet";
;

const PetIdView = () => {
    const { id } = useParams();

    const {
        data: pet,
        isLoading,
        isError,
      } = useQuery({
        queryKey: ['pet-by-id'],
        queryFn: () => getPetByIdFn(id),
      });

      if (isLoading) {
        return (
          <>
            <h1>Cargando...</h1>
            <hr />
          </>
        );
      }
    
      if (isError) {
        return (
          <>
            <h1>Error</h1>
            <hr />
            <div className='alert alert-danger'>
              Ocurrió un error cargando este blog
            </div>
          </>
        );
      }

      if (pet) {
        return (
          <>
            <div className='d-flex justify-content-between align-items-center'>
              <h1 className='mb-0'>{pet.name}</h1>
              
            </div>
            <hr />
           
          </>
        );
      }

  return (
    <div>
     
    </div>
  );
}

export default PetIdView;
