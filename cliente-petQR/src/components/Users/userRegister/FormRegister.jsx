import { useForm } from "react-hook-form";
import Input from "../../utils/input/Input";
import { useMutation } from "@tanstack/react-query";
import { postUserFn } from "../../../api/user";

const FormRegister = () => {
  const { register, handleSubmit: onSubmitRHF } = useForm();

  const {mutate: postUser} = useMutation({
    mutationFn: postUserFn,
    onSuccess:()=>{
        alert("Registro exitoso")
       
    },
    onError:()=>{}
  })

  const handleSubmit = (data) => {
    //agregar spinner
    postUser({ ...data, isAdmin: false, isAuthenticated: false });
  };
  return (
    <>
      <form
        action="#"
        className="mt-8 grid grid-cols-6 gap-6"
        onSubmit={onSubmitRHF(handleSubmit)}
      >
        <Input
          register={register}
          placeholder="Nombre"
          type="text"
          id="firstname"
          className="col-span-6 sm:col-span-3"
          options={{
            required: true,
            minLength: 4,
            maxLength: 6000,
          }}
          name="Nombre"
        />

        <Input
          register={register}
          placeholder="Apellido"
          id="lastname"
          type="text"
          className="col-span-6 sm:col-span-3"
          options={{
            required: true,
            minLength: 4,
            maxLength: 6000,
          }}
          name="Apellido"
        />

        <Input
          register={register}
          placeholder="Email"
          type="email"
          id="email"
          className="col-span-6"
          options={{
            required: true,
            minLength: 4,
            maxLength: 6000,
          }}
          name="Email"
        />
        <Input
          register={register}
          placeholder="Direccion"
          type="text"
          id="direccion"
          className="col-span-6 sm:col-span-3"
          options={{
            required: true,
            minLength: 4,
            maxLength: 6000,
          }}
          name="Direccion"
        />
        <Input
          register={register}
          placeholder="Telefono"
          type="text"
          id="numberphone"
          className="col-span-6 sm:col-span-3"
          options={{
            required: true,
            minLength: 4,
            maxLength: 6000,
          }}
          name="Telefono"
        />

        <Input
          register={register}
          placeholder="Contraseña"
          type="password"
          id="password"
          className="col-span-6 sm:col-span-3"
          options={{
            required: true,
            minLength: 4,
            maxLength: 6000,
          }}
          name="contraseña"
        />

        <fieldset className="col-span-6">
          <label htmlFor="MarketingAccept" className="flex gap-4">
            <input
              type="checkbox"
              id="MarketingAccept"
              name="marketing_accept"
              className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
            />

            <span className="text-sm text-gray-700">
              Deseo Recibir informacion sobre actualizacion en mi email
            </span>
          </label>
        </fieldset>

        <fieldset className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-900 hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
            Crear cuenta
          </button>

          <p className="mt-4 text-sm text-gray-500 sm:mt-0">
            Ya tienes cuenta?{" "}
            <button className="text-gray-700 underline font-bold ">
              {"  "}
              Iniciar
            </button>
            .
          </p>
        </fieldset>
      </form>
    </>
  );
};

export default FormRegister;
