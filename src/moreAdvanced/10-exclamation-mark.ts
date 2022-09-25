let word: string | null = null
const num = 10
if (num > 5) {
  word = 'abc'
}


console.log(word!.toLocaleLowerCase())

interface Person {
  name: string,
  age: number,
  sex: 'female' | 'male',
}

function printName(name?: string) {
  const fullName: string = name!;
}


function printName2(person?: Person) {
 console.log(person?.age)
}

export {}

const personsArr: Person[] = [
  {
    name: 'Vika',
    age: 21,
    sex: 'female',
  },
  {
    name: 'Vova',
    age: 22,
    sex: 'male',
  },

]

const famalePeople = personsArr.find(person => person.sex === 'female')!