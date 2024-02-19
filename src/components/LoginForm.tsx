import { useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form'
import { ILogin } from "../interfaces/auth.interface";
import {auth} from '../api/auth.api'

function LoginForm() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<ILogin>();

  const onSubmit = handleSubmit((values) => {
    auth
      .login(values)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  });

  return (
    <div className="w-1/3 border-2 border-gray-300 rounded-sm drop-shadow-2xl bg-white p-6">
      <form onSubmit={onSubmit} className="flex justify-center flex-col gap-2">
        <h1 className="text-center text-2xl font-semibold text-black font-sans">
          Ingresá a tu cuenta
        </h1>
        <input
          className="border border-gray-400 rounded-sm p-2 mt-2 font-sans"
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}

        />
        <input
          className="border border-gray-400 rounded-sm p-2 font-sans"
          type="password"
          placeholder="Contraseña"
          {...register("password", { required: true })}

        />
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 border border-gray-400 rounded-sm shadow mt-2 mb-2 font-sans">
          Ingresar
        </button>
      </form>
      <hr className="mt-2" />
      <h1 className="flex text-black font-medium mt-2 font-sans">
        ¿No tienes una cuenta?
        <p
          onClick={() => {
            navigate("/register");
          }}
          className="ml-1 cursor-pointer text-indigo-600 hover:text-indigo-800 font-medium font-sans"
        >
          Regístrate
        </p>
      </h1>
    </div>
  );
}

export default LoginForm;
