export interface User {
  name: string;
  username: string;
  logged: boolean;
}

export interface UserInfo {
  name: string;
  username: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface ResponseApi {
  data: {
    token: string;
  };
}

export interface UserRegister {
  name: string;
  username: string;
  password: string;
}

export interface IProperty {
  typeOf: string;
  adress: string;
  name: string;
  surface: number;
  price: number;
  bedrooms: number;
  bathrooms: number;
  year: number;
  description: string;
  image: string;
  views: boolean;
  airConditioning: boolean;
  heating: boolean;
  parking: boolean;
  pool: boolean;
  fireplace: boolean;
  garden: boolean;
  laundryRoom: boolean;
  storage: boolean;
  terrace: boolean;
  id: string;
}
