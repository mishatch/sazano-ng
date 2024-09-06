export interface User {
  email: string;
  password: string;
  name: string;
  surName: string;
  phoneNumber: string;
  roles: string[];
}
export interface LoggedInUser {
  email: string;
  password: string;
}
