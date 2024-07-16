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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="text" placeholder="Nombre" {...registerForm("name")} />
        <input
          type="text"
          placeholder="Apellido"
          {...registerForm("lastname")}
        />
      </div>
      <input
        type="text"
        placeholder="Correo electrónico"
        {...registerForm("email")}
      />
      <input
        type="password"
        placeholder="Contraseña"
        {...registerForm("password")}
      />
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default RegisterPage;
