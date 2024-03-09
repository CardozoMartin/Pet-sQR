
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { deletePetFn } from "../../api/pet";
import { usePet } from "../../store/usePet";
const Card = (props) => {
  const { pet } = props;
  console.log(pet)
  const queryClient = useQueryClient();

  const { setPetToEdit } = usePet();

  const { mutate: deletePet } = useMutation({
    mutationFn: deletePetFn,
    onSuccess: () => {
      Swal.close();
      toast.success("Product deleted.");

      queryClient.invalidateQueries("pet");
    },
    onError: (e) => {
      Swal.close();
      toast.error(e.message);
    },
  });

  const handleDelete = () => {
    Swal.fire({
      title: "¿Are you sure?",
      text: `You're aboute to delete the product "${pet.name}"`,
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.showLoading();
        deletePet(pet.id);
      }
    });
  };

  const handleEdit = ()=>{
    setPetToEdit(pet)
  }

  return (
    <section className="bg- text-white">
      <div className="  overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
        <span className=" inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              {pet.name}
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-600">
              {pet.raza} {pet.tipo}
            </p>
          </div>

          <div className="hidden sm:block sm:shrink-0">
            <img
              alt=""
              src={pet.image}
              className="size-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="mt-4">
          <p className="text-pretty text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
            illum provident a, ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </div>

        <button
          className="inline-block rounded bg-red-600 px-4 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
          onClick={handleDelete}
        >
          Eliminar
        </button>

        <button className="inline-block rounded border bg-yellow-600 border-current px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500 ms-1"
        onClick={handleEdit}>
          Editar
        </button>
      </div>
    </section>
  );
};

export default Card;
