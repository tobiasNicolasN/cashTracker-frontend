import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function RegisterPage() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-1/3 border-2 rounded-sm drop-shadow-2xl bg-white p-6">
        <form 
        className=" flex justify-center flex-col gap-2"
        onSubmit={handleSubmit((values)=>{
          console.log(values)
        })}>
          <h1 className="text-center text-2xl font-semibold text-black">
            Crear una nueva cuenta
          </h1>
          <input
            className="border border-gray-400 rounded-sm p-2 mt-2"
            type="text"
            placeholder="Nombre"
            {...register("username", { required: true })}
          />
          <input
            className="border border-gray-400 rounded-sm p-2"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <input
            className="border border-gray-400 rounded-sm p-2"
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
          />
          <input
            className="border border-gray-400 rounded-sm p-2"
            type="password"
            placeholder="Confirmar contraseña"
            {...register("password", { required: true })}
          />
          <button
            className="bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 border border-gray-400 rounded-sm shadow mt-2 mb-2"
            type="submit"
          >
            Crear cuenta
          </button>
        </form>
        <hr className="mt-2" />
        <h1 className="flex text-black font-semibold mt-2">
          ¿Ya tienes una cuenta?
          <p
            className="ml-1 cursor-pointer text-slate-600 hover:text-slate-700"
            onClick={() => {
              navigate("/login");
            }}
          >
            Iniciar sesión
          </p>
        </h1>
      </div>
    </div>
  );
}

export default RegisterPage;
