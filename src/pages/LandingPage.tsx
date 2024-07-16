import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-3 p-2">
      <button
        className="text-xl bg-slate-700 w-28 rounded-lg p-2"
        onClick={() => navigate("/register")}
      >
        register
      </button>
      <button
        className="text-xl bg-slate-700 w-28 rounded-lg p-2"
        onClick={() => navigate("/login")}
      >
        login
      </button>
    </div>
  );
}

export default LandingPage;
