export interface IRegister {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  username: string;
  email: string;
  password: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
