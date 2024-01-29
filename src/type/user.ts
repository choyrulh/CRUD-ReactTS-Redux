export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  phone: number;
}

export interface CreateUserRequest {
  name: string;
  email: string;
  role: string;
  phone: number;
}

export interface InitialState {
  loading: boolean;
  users: User[];
  error: string;
}
