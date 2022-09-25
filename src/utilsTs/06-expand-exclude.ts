
type T0 = Exclude<"a"| "b"| "c", "a">
type T1 = Exclude<"a" | "b"| "c", "a" | "b">
type T2 = Exclude<string | number | (() => void), Function>

type Status = 'success' | 'clientError' | 'serverError' | 200 | 401 | 504;
type ExcludeNumericStatus = Exclude<Status, string>;
type ExcludeTextStatus = Exclude<Status, number>

type ExtractTextStatus = Extract<Status, string>
type ExtractNumericStatus = Extract<Status, number>

interface Person {
  age: number,
  firstNmae: string,
  lastName: string,
  sex: 'male' | 'famale',
  country: string,
  education: string,
  skills: string[],
}

type PersonNames = Extract<keyof Person, 'firstNmae' | 'lastNmae'>

type exist = NonNullable<string[] | null>


export {}