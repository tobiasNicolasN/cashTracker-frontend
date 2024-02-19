import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <>
      <h1 className="absolute mt-4 ml-8 text-3xl font-bold tracking-widest	 text-white font-sans">
        MisGastos.
      </h1>
      <div className="flex justify-center items-center h-screen bg-indigo-700">
        <div className="w-2/4 h-screen flex flex-col justify-center items-center">
          <p className="w-11/12 text-left text-2xl text-white font-sans font-semibold tracking-wide	 mb-4">
          Gestiona tus finanzas con claridad, vive con tranquilidad.
          </p>
          <p className="w-11/12 tracking-wide font-light text-left text-xl text-white font-sans">
            Registra tus gastos en pesos y conviértelos automáticamente al valor
            del dólar actual. Una herramienta para documentar y gestiona tus
            gastos de manera sencilla, garantizando una visión precisa de tus
            finanzas, independientemente de la moneda.
          </p>
        </div>
        <LoginForm />
      </div>
    </>
  );
}

export default LoginPage;
