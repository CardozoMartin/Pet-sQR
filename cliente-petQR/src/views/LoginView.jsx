import LoginForm from "../components/login/LoginForm";

const LoginView = () => {
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center border-black bg-gray-100">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Bienvenido</h1>

          <p className="mt-4 text-gray-500">
            Ingresa ahora para poder agregar a tus mascotas
          </p>
        </div>
      <LoginForm/>
        
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt=""
          src="https://cdn.me-qr.com/n1ed/files/me-qr/%D0%A1%D0%BB%D0%BE%D0%B8%CC%86%2014.svg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default LoginView;
