import { useForm } from "react-hook-form";
import { IRegister } from "../interfaces/auth.interface";
import { useAuth } from "../context/auth.context";
import { useState, useEffect } from "react";
import { TbEye, TbEyeClosed } from "react-icons/tb";

interface IRegisterProps {
  state: boolean;
  openRegister: () => void;
}

function RegisterForm(props: IRegisterProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IRegister>();
  const [showPassword, setShowPassword] = useState(false);
  const { signup, user, error: registerErrors, cleanErrors } = useAuth();

  const onSubmit = handleSubmit((values) => {
    signup(values);
    console.log(user);
  });

  const showPassw = () => {
    setShowPassword(!showPassword);
  };

  const password = watch("password");

  useEffect(() => {
    if (registerErrors.error.length > 0) {
      const timer = setTimeout(() => {
        cleanErrors();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [registerErrors.error]);

  return (
    <div className="w-1/3 border-2 rounded-md drop-shadow-2xl bg-white p-6">
      <form className=" flex justify-center flex-col gap-2" onSubmit={onSubmit}>
        <h1 className="text-center text-2xl font-semibold text-black">
          Crear una nueva cuenta
        </h1>
        <input
          className="border border-gray-400 rounded-sm p-2 mt-2"
          type="text"
          placeholder="Nombre de usuario"
          {...register("username", { required: true })}
        />
        <input
          className="border border-gray-400 rounded-sm p-2"
          type="email"
          placeholder="Correo electrónico"
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
            className="absolute flex justify-center items-center rounded-full right-8 w-6 h-6 cursor-pointer hover:bg-slate-200"
          >
            {showPassword === false ? <TbEyeClosed /> : <TbEye />}
          </h1>
        </div>
        <input
          className="border w-full border-gray-400 rounded-sm p-2 font-sans"
          type={showPassword ? "text" : "password"}
          placeholder="Confirmar contraseña"
          {...register("confirmPassword", {
            required: true,
            validate: (value) =>
              value === password || "Las contraseñas no coinciden.",
          })}
        />
        <div
          className={
            registerErrors.error.length > 0
              ? "bg-red-600 w-full h-8 flex items-center"
              : "hidden"
          }
        >
          <p className="bg-red-600 text-white ml-2">
            {registerErrors.error.map((error) => error)}
          </p>
        </div>
        <div>
          {errors.username && (
            <div className="bg-red-600 w-full h-8 flex items-center">
              <p className="bg-red-600 text-white ml-2">
                Nombre de usuario requerido.
              </p>
            </div>
          )}
          {errors.email && (
            <div className="bg-red-600 w-full h-8 flex items-center">
              <p className="bg-red-600 text-white ml-2">
                Correo electrónico requerido.
              </p>
            </div>
          )}
          {errors.password && (
            <div className="bg-red-600 w-full h-8 flex items-center">
              <p className="bg-red-600 text-white ml-2">
                Contraseña requerida.
              </p>
            </div>
          )}
          {errors.confirmPassword?.message && (
            <div className="bg-red-600 w-full h-8 flex items-center">
              <p className="bg-red-600 text-white ml-2">
                {errors.confirmPassword.message}
              </p>
            </div>
          )}
        </div>
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
