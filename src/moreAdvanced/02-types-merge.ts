type Union = 'a' | 'b' | 'd' | 'e'
type Union2 = 'a' | 'b' | 'd' | 'e'

type Union3 = Union | Union2
type Union4 = Union & Union2

// type Union5 = {a: string, b: string, c: number} & {a: string, t: boolean, z: null}

// const example: Union5 = {


// }
type User1 = {
  readonly email: string,
  readonly login: string,
  password: string,
} & Person1




type Person1 = {
  readonly firsName: string,
  lastName: string,
  phone?: string,
  yearOfBirth?: number,
} 



