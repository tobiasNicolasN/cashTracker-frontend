import { useForm } from "react-hook-form";
import { IRegister } from "../interfaces/auth.interface";
import { useAuth } from "../context/auth.context";
import { useState } from "react";
import { TbEye, TbEyeClosed } from "react-icons/tb";

interface IRegisterProps {
  state: boolean;
  openRegister: () => void;
}

function RegisterForm(props: IRegisterProps) {
  const { register, handleSubmit } = useForm<IRegister>();
  const [showPassword, setShowPassword] = useState(false);
  const { signup, user } = useAuth();

  const onSubmit = handleSubmit((values) => {
    signup(values);
    console.log(user);
  });

  const showPassw = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-1/3 border-2 rounded-md drop-shadow-2xl bg-white p-6">
      <form className=" flex justify-center flex-col gap-2" onSubmit={onSubmit}>
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
        <div className="flex items-center">
          <input
            className="border w-full border-gray-400 rounded-sm p-2 font-sans"
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            {...register("password", { required: true })}
          />
          <h1
            onClick={() => showPassw()}
            className="absolute flex justify-center items-center rounded-full right-10 w-6 h-6 cursor-pointer hover:bg-slate-200"
          >
            {showPassword === false ? <TbEyeClosed /> : <TbEye />}
          </h1>
        </div>
        <input
          className="border w-full border-gray-400 rounded-sm p-2 font-sans"
          type={showPassword ? "text" : "password"}
          placeholder="Confirmar contraseña"
          {...register("password", { required: true })}
        />
        <button
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 border border-gray-400 rounded-sm shadow mt-2 mb-2"
          type="submit"
        >
          Crear cuenta
        </button>
      </form>
      <hr className="mt-2" />
      <h1 className="flex text-black font-semibold mt-2">
        ¿Ya tienes una cuenta?
        <p
          className="ml-1 cursor-pointer text-emerald-600 hover:text-emerald-800"
          onClick={() => props.openRegister()}
        >
          Iniciar sesión
        </p>
      </h1>
    </div>
  );
}

export default RegisterForm;
