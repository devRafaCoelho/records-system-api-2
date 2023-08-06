export type RegisterUser = {
  firstName: string;
  lastName: string;
  email: string;
  cpf: string;
  phone: string;
  password: string;
};

export type Login = {
  email: string;
  password: string;
};
