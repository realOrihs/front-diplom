export interface IUser {
  id: number;
  attributes: IAttributes;
}

interface IAttributes {
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  icon?: string;
}

export interface IUserLogin {
  jwt: string;
  user: IUserSimple;
}

export interface IUserSimple {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  icon?: string;
}
