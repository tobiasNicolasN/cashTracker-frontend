import { IUser } from "./auth";

export interface IRegisterForm {
  name: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IExpenseForm {
  user: IUser["id"];
  amount: number;
  category: string;
  paymentMethod: string;
  detail?: string;
  exchangeRate: string;
}
