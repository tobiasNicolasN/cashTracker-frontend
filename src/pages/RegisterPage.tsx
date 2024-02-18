import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="flex justify-center flex-col gap-2 w-1/3 border-2 rounded-md drop-shadow-2xl p-6 bg-white">
        <h1 className="text-center text-2xl font-semibold text-black">Regístrate</h1>
        <input
          className="border border-gray-400 rounded-md p-2 mt-4"
          type="username"
          placeholder="Nombre"
        />
        <input
          className="border border-gray-400 rounded-md p-2"
          type="email"
          placeholder="Email"
        />
        <input
          className="border border-gray-400 rounded-md p-2"
          type="password"
          placeholder="Contraseña"
        />
        <input
          className="border border-gray-400 rounded-md p-2"
          type="password"
          placeholder="Confirmar contraseña"
        />
        <button className="bg-green-500 hover:bg-green-400 text-white font-semibold py-2 border border-gray-400 rounded shadow mt-2 mb-2">
          Crear cuenta
        </button>
        <hr />
        <h1 className="flex text-black font-semibold mt-2">¿Ya tienes una cuenta?<p className="ml-1 cursor-pointer text-slate-600 hover:text-slate-500" onClick={()=>{navigate("/login")}}>Iniciar sesión</p></h1>
      </form>
    </div>
  );
}

export default RegisterPage;
