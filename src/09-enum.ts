
enum Grades {
  Junior = 'junior',
  Middle = 'middle',
  Senior = 'senior',
}

interface Dev {
  login: string,
  skills: string[],
  level: Grades, 
}

function upGrade(user: {level: Grades}) {
  if (user.level === Grades.Junior) {
    user.level = Grades.Middle
  }

  if (user.level === Grades.Middle) {
    user.level = Grades.Senior
  }

}