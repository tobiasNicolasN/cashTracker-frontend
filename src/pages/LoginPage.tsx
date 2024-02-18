function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <form className="flex justify-center flex-col gap-2 w-1/3 border-2 rounded-md drop-shadow-2xl p-6 bg-white">
        <input className="border border-gray-400 rounded-md p-2 focus:ring-blue-500" placeholder="Email"/>
        <input className="border border-gray-400 rounded-md p-2" type="password" placeholder="Contraseña"/>
        <button className="bg-slate-600 hover:bg-slate-500 text-white font-semibold py-2 border border-gray-400 rounded shadow mt-2 mb-2">Iniciar Sesión</button>
        <hr />
        <button className="bg-green-500 hover:bg-green-400 text-white font-semibold py-2 border border-gray-400 rounded shadow mt-2 mb-2">Crear cuenta</button>
      </form>
    </div>
  );    
}

export default LoginPage;
