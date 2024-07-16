import { IUser } from "./auth";

export interface IExpense {
  userId: IUser["id"];
  category: string;
  amount: number;
  amountUSD: number;
  paymentMethod: string;
  detail?: string;
  createdAt: Date;
  updatedAt: Date;
}
