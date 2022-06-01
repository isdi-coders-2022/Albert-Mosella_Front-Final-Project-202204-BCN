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
