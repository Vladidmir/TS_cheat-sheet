interface User {
  readonly email: string,
  readonly login: string,
  password: string,
}

interface User {
  isOnline?: boolean,
}

// interface Window {
//   isAuth?: boolean;
// }

// window.isAuth

interface Person {
  readonly firsName: string,
  lastName: string,
  phone?: string,
  yearOfBirth?: number,
}

interface Employee extends Person, User{
  contractStart: Date,
  phone: string,
}
