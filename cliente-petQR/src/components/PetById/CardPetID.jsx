

import { useQuery } from '@tanstack/react-query';

const CardPetID = () => {
    console.log(petId);
    const { data: pet, isLoading, isError } = useQuery({
        queryKey: ['pet', petId],
        queryFn: () => (petId),
      });
    
      if (isLoading) {
        return <div>Cargando...</div>;
      }
    
      if (isError) {
        return <div>Error al obtener la mascota</div>;
      }
    
      if (!pet) {
        return <div>No se encontró la mascota</div>;
      }
    
  return (
    <>
    <div>
      <h2>Detalles de la mascota</h2>
      <p>Nombre: {pet.name}</p>
      <p>Tipo: {pet.tipo}</p>
      {/* Agrega más campos aquí según tus necesidades */}
    </div>
    </>
  )
}

export default CardPetID