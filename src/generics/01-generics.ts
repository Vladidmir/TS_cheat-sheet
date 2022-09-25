//syntax
type TypeFactory<T> = T
type XType2 = TypeFactory<string>
type XType3 = TypeFactory<boolean>


function toArray<T>(...arg: T[]) : T[] {
  return arg;
}

toArray<number>(1, 2, 3)
toArray<string>('as','ded')

interface ModelData<T> {
  title: string,
  value: T ,
}

const obj1: ModelData<number> = {
  title: 'test',
  value: 12,
}

const obj2: ModelData<Array<number>> = {
  title: '123',
  value: [1,2,3]
}


const head = <T>(value: T[]) => value[0]


function append<T>(el: T, list: T[]) : T[] {
  return list.concat(el)
}

append<number>(1, [1,2,3])



export {}