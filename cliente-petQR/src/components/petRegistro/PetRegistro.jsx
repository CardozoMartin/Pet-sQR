import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { postPetFn, putPetFn } from "../../api/pet";
import { useSession } from "../../store/useSession";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { usePet } from "../../store/usePet";

const PetRegistro = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const { user } = useSession();
  const { pet , clearPet } = usePet();

  const isEditing = !!pet;

  if(isEditing){
    setValue("name", pet.name);
    setValue("tipo", pet.tipo);
    setValue("raza", pet.raza);

  }


  const queryClient = useQueryClient();
// POST
  const { mutate: postPet } = useMutation({
    mutationFn: postPetFn,
    onSuccess: () => {
      Swal.close();
      toast.success("Mascota agregada con exito");
      reset();

      queryClient.invalidateQueries("pet");
    },
    onError: () => {
        Swal.close();
        toast.success("Ocurrio un error al crear la mascota");
    },
  });
//EDIT
const { mutate: putPet } = useMutation({
  mutationFn: putPetFn,
  onSuccess: () => {
    Swal.close();
    toast.success("Mascota editada con exito");
    reset();

    queryClient.invalidateQueries("pet");
    clearPet();
  },
  onError: () => {
      Swal.close();
      toast.error("Ocurrio un error al editar la mascota");
  },
});
  const onSubmit = (data) => {
    Swal.showLoading();

    if(isEditing){
      putPet({...data, id: pet.id})
    }else{
      const petData = { ...data, userID: user.id };
    postPet(petData);
    }
    
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Agregar una mascota
        </h1>

        <form
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="text-center text-lg font-medium">Completa los datos</p>

          <div>
            <label htmlFor="name" className="sr-only">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Ingrese el nombre"
            />
          </div>

          <div>
            <select
              name="tipo"
              id="tipo"
              {...register("tipo")}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            >
              <option>Seleccione el tipo de mascota</option>
              <option value="Perro">Perro</option>
              <option value="Gato">Gato</option>
              <option value="Conejo">Conejo</option>
              <option value="Caballo">Caballo</option>
              <option value="Hamster">Hamster</option>
            </select>
          </div>

          <div>
            <label htmlFor="raza" className="sr-only">
              Raza
            </label>
            <input
              type="text"
              id="raza"
              {...register("raza")}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Ingrese la raza de su mascota"
            />
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
};

export default PetRegistro;
