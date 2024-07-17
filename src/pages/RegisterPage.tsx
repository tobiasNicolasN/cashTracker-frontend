import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { IRegisterForm } from "../interface/form";

function RegisterPage() {
  const { register: registerForm, handleSubmit } = useForm<IRegisterForm>();
  const { register } = useAuth();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IRegisterForm> = async (formData) => {
    const { name, lastname, email, password } = formData;
    const username = `${name} ${lastname}`;
    try {
      await register(username, email, password);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form
        className="flex flex-col gap-2 bg-gray-700 p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <div className="w-full">
            <input
              className="w-1/2 rounded-tl-md p-2 border-b-2 border-r-2"
              type="text"
              placeholder="Nombre"
              {...registerForm("name")}
            />
            <input
              className="w-1/2 rounded-tr-md p-2 border-b-2"
              type="text"
              placeholder="Apellido"
              {...registerForm("lastname")}
            />
          </div>
          <input
            className="p-2 border-b-2"
            type="text"
            placeholder="Correo electrónico"
            {...registerForm("email")}
          />
          <input
            className="p-2 rounded-b-md"
            type="password"
            placeholder="Contraseña"
            {...registerForm("password")}
          />
        </div>
        <button className="bg-slate-500 rounded-md p-1" type="submit">Registrarse</button>
        <button className="bg-slate-500" onClick={() => navigate("/login")}>Iniciar sesión</button>
      </form>
    </div>
  );
}

export default RegisterPage;
