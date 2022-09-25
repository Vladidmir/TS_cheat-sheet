
function example1(x?: number | string) {
  if (typeof x === 'string') {}
  if (typeof x === 'number') {}
  if (typeof x === 'undefined') {}
}


function example2(strs: string | string[] | null) {
  if(strs && typeof strs === 'object') {}
  if(Array.isArray(strs)) {}
  if (typeof strs === 'string') {}
}

function example3(x: number[] | Date) {
  if (x instanceof Date) {}
}


type Fish = { swim: () => void} 
type Bird = { fly: ()  => void}

function move(animal: Fish | Bird) {

  if('swim' in animal) {
    return animal.swim
  }

  animal.fly()

}
export {}