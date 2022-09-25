export function typleCreator<T>(first: T) {
  return function<U>(second: U): [T, U] {
    return [first, second]
  }
}

const toupleWith1 = typleCreator(1)
const toupleResult = toupleWith1(2)
console.log(toupleResult)



export function createMap<T>(list: T[]) {
  return function<U>(cb: (x: T) => U ): U[] {
    const result = [];
 
    for (let el of list) {
      result.push(cb(el))
    }
 
    return result;
  }
}

const mapNums = createMap([1,2,3])
const result = mapNums((num) => num + 2)

