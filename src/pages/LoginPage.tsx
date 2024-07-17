import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ILoginForm } from "../interface/form";

function LoginPage() {
  const { register, handleSubmit } = useForm<ILoginForm>();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ILoginForm> = async (formData) => {
    const { email, password } = formData;
    try {
      await login(email, password);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="flex flex-col gap-3 bg-gray-700 w-1/3" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Correo electrónico"
        {...register("email")}
      />
      <input
        type="password"
        placeholder="Contraseña"
        {...register("password")}
      />
      <button type="submit">Iniciar sesión</button>
      <button onClick={() => navigate("/register")}>Registrarse</button>
    </form>
  );
}

export default LoginPage;
