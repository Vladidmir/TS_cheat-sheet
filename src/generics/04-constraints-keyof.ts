
function prop<T, U extends keyof T>(key: U, obj: T): T[U] {
  return obj[key]
}

const obj1 = {a: 1, b: 2, c: 3}

prop('a', obj1)



export function keys<Obj extends object >(obj: Obj): Array<keyof Obj> {
  const currentKeys = [];
 
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) currentKeys.push(key);
  }
  
  return currentKeys;
}
 
 
export function values<Obj extends object>(obj: Obj): Array<Obj[keyof Obj]>{
  const currentValues = [];
 
  for (let key in obj) {
    currentValues.push(obj[key]);
  }
 
  return currentValues;
}



export {}