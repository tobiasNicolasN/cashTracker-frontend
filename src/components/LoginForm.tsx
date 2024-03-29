import { useForm } from "react-hook-form";
import { ILogin } from "../interfaces/auth.interface";
import { useAuth } from "../context/auth.context";
import { TbEye, TbEyeClosed } from "react-icons/tb";
import { useState, useEffect } from "react";

interface ILoginProps {
  openRegister: () => void;
}

function LoginForm(props: ILoginProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ILogin>();
  const [showPassword, setShowPassword] = useState(false);
  const { signin, error: loginErrors, cleanErrors } = useAuth();

  const onSubmit = handleSubmit((values) => {
    signin(values);
  });

  const showPassw = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (loginErrors.error.length > 0) {
      const timer = setTimeout(() => {
        cleanErrors();
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [loginErrors.error]);

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
        <div className="flex items-center">
          <input
            className="border w-full border-gray-400 rounded-sm p-2 font-sans"
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            {...register("password", { required: true })}
          />
          {watch("password") && (
            <h1
              onClick={() => showPassw()}
              className="absolute flex justify-center items-center rounded-full right-8 w-6 h-6 cursor-pointer hover:bg-slate-200"
            >
              {showPassword === false ? <TbEyeClosed /> : <TbEye />}
            </h1>
          )}
        </div>
        <div>
          <div
            className={
              loginErrors.error.length > 0
                ? "bg-red-600 w-full h-auto flex flex-col items-center"
                : "hidden"
            }
            style={{ alignItems: "flex-start" }}
          >
            {loginErrors.error.map((error: string, index: number) => (
              <p
                className="bg-red-600 text-white ml-2 text-left mt-1 mb-1"
                key={index}
              >
                {error}
              </p>
            ))}
          </div>
          {errors.email && (
            <div className="bg-red-600 w-full h-8 flex items-center">
              <p className="bg-red-600 text-white ml-2 mt-2 mb-2">
                Email requerido.
              </p>
            </div>
          )}
          {errors.password && (
            <div className="bg-red-600 w-full h-8 flex items-center">
              <p className="bg-red-600 text-white ml-2 mt-2 mb-2">
                Contraseña requerida.
              </p>
            </div>
          )}
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 border border-gray-400 rounded-sm shadow mt-2 mb-2 font-sans">
          Ingresar
        </button>
      </form>
      <hr className="mt-2" />
      <h1 className="flex text-black font-medium mt-2 font-sans">
        ¿No tienes una cuenta?
        <p
          onClick={() => {
            props.openRegister();
          }}
          className="ml-1 cursor-pointer text-emerald-600 hover:text-emerald-800 font-medium font-sans"
        >
          Regístrate
        </p>
      </h1>
    </div>
  );
}

export default LoginForm;
