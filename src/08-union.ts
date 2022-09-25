type Status = 'ok' | 'loading' | 'error'

const statusX: Status = 'ok'


function printId(id: number | string): void {
  if (typeof id === 'string') {
    console.log(id.toUpperCase())
  }

  console.log(id)
}

function welcome(preson: [string, string] | string): void {
  if (Array.isArray(preson)) {
    console.log(`Hello, ${preson.join(' ')}`)
  } else {
    console.log(`Hello ${preson}`)
  }
}

//......
type Level = 'junior' | 'middle' | 'senior';
 
interface Developer {
  login: string,
  skills: string[],
  level: Level, 
}
 
function changeGrade(user: {level: Level}, newLevel: Level) {
  user.level = newLevel
}

const dev1: Developer = {
  level: 'junior',
  login: 'Vova',
  skills: ['HTML', 'CSS', 'JS'],
}

changeGrade(dev1, 'middle')
