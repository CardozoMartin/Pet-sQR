import { useForm } from "react-hook-form";
import Input from "../input/Input";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { postLoginFn } from "../../api/auth";
import { useSession } from "../../store/useSession";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

const LoginForm = () => {
    const { login } = useSession();
    const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const { mutate: postLogin, isLoading } = useMutation({
    mutationFn: postLoginFn,
    onSuccess:(data)=>{
      Swal.close();
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Bievenido",
      });
        login(data)

        navigate("/")

      
    },
    onError:(e)=>{
      Swal.close();
      toast.error(e.message);
    }
  })
  const onSubmit = (data) => {
    if (!isLoading) {
      Swal.showLoading();
      postLogin(data);
    }
  };

  return (
    <form
      action="#"
      className="mx-auto mb-0 mt-8 max-w-md space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        register={register}
        placeholder="Telefono"
        type="email"
        id="email"
        className="col-span-6 sm:col-span-3"
        options={{
          required: true,
          minLength: 4,
          maxLength: 6000,
        }}
        name="Email"
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
        name="Contraseña"
      />

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          No tienes cuenta?
          <Link className="underline font-extrabold" to="/registro">
            Registrate
          </Link>
        </p>

        <button
          type="submit"
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-800"
        >
          Ingresar
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
