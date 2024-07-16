import { useAuth } from "../context/AuthContext";

function LandingPage() {
  const { register, login, logout } = useAuth();

  const handleRegister = async () => {
    try {
      await register("prueba6", "prueba6@gmail.com", "12345678");
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try {
      await login("prueba3@gmail.com", "12345678");
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-3 p-2">
      <button
        className="text-xl bg-slate-700 w-28 rounded-lg p-2"
        onClick={() => handleRegister()}
      >
        register
      </button>
      <button
        className="text-xl bg-slate-700 w-28 rounded-lg p-2"
        onClick={() => handleLogin()}
      >
        login
      </button>
      <button
        className="text-xl bg-slate-700 w-28 rounded-lg p-2"
        onClick={() => handleLogout()}
      >
        logout
      </button>
    </div>
  );
}

export default LandingPage;
