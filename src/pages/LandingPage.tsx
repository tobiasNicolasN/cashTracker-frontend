import LoginForm from "../components/LoginForm";
import { useState, useEffect } from "react";
import RegisterForm from "../components/RegisterForm";
import { useAuth } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [registerForm, setRegisterForm] = useState(false);
  const { isAuthenticaded } = useAuth();
  const navigate = useNavigate();

  const openRegister = () => {
    setRegisterForm(!registerForm);
  };

  useEffect(() => {
    if (isAuthenticaded) navigate("/home");
  }, [isAuthenticaded]);

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-indigo-700">
        <h1 className="fixed top-2 left-4 text-2xl font-bold tracking-widest text-white font-sans">
          MisGastos.
        </h1>
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
        {registerForm === false ? (
          <LoginForm openRegister={openRegister} />
        ) : (
          <RegisterForm state={registerForm} openRegister={openRegister} />
        )}
      </div>
    </>
  );
}

export default LandingPage;
