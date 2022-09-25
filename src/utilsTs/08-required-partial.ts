interface Todo {
  id: string,
  title: string,
  description?: string,
  completed: boolean,
  createAt: number,
}

type ReadOnlyTodo = Readonly<Todo>

type PartialTodo = Partial<Todo>

type RequiredTodo = Required<Todo>

function updateTodo(todo: Todo, fieldsToUpdate: PartialTodo) {
  return {...todo, ...fieldsToUpdate}
}





export {}