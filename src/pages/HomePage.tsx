import { useAuth } from "../context/AuthContext"

function HomePage() {
  const {logout} = useAuth()
  return (
    <div className="p-10">
      <button onClick={() => logout()} className="w-40 h-10 text-xl bg-gray-600 rounded-lg">Logout</button>
    </div>
  )
}

export default HomePage