import { SubmitHandler, useForm } from "react-hook-form";
import { baseUrl, useAuth } from "../context/AuthContext";
import { IExpenseForm } from "../interface/form";

function HomePage() {
  const { logout } = useAuth();
  const { register, handleSubmit } = useForm<IExpenseForm>();

  const onSubmit: SubmitHandler<IExpenseForm> = async (dataForm) => {
    const { category, paymentMethod, amount, detail, exchangeRate } = dataForm;
    try {
      const res = await fetch(`${baseUrl}expenses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          category,
          paymentMethod,
          amount,
          exchangeRate,
          detail,
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Cotización del dolar"
          {...register("exchangeRate", { required: true })}
        />
        <input
          type="text"
          placeholder="Categoria"
          {...register("category", { required: true })}
        />
        <input
          type="text"
          placeholder="Medio de pago"
          {...register("paymentMethod", { required: true })}
        />
        <input
          type="number"
          placeholder="Monto"
          {...register("amount", { required: true })}
        />
        <input
          type="text"
          placeholder="Detalle"
          {...register("detail", { required: false })}
        />
        <button type="submit">Subir gasto</button>
      </form>
      <button
        onClick={() => logout()}
        className="w-40 h-10 text-xl bg-gray-600 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}

export default HomePage;
