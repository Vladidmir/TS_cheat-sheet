const x = 12
const isXNegative = x >= 0 ? 'no' :'yes'

//.........................

interface StringRecor {
  [key: string]: string
}

interface DateRecord {
  [key: string]: Date
}

type MyRecord<T> = T extends string ? StringRecor : DateRecord

type Obj1 = MyRecord<string>
const exStr: Obj1 = {
  r: '123'
}


type Obj2 = MyRecord<Date>
const exNum: Obj2 = {
  d: new Date()
}
//..................

type Answer_1 = 64 extends number ? true : false
type Answer_2 = number extends 64 ? true : false
type Answer_3 = string[] extends any ? true : false
type Answer_4 = string[] extends any[] ? true : false
type Answer_5 = never extends any ? true : false
type Answer_6 = any extends any ? true : false
type Answer_7 = Date extends {new(...arg: any[]): any} ? true : false
type Answer_8 = typeof  Date extends {new(...arg: any[]): any} ? true : false


export {}
