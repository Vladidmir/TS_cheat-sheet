type WellKnownBrands = 'apple' | 'lenovo' | 'dell' | 'huawei'

type BrandPrice = Record<WellKnownBrands, number>;

const objBrand: BrandPrice = {
  apple:  30,
  dell: 10,
  huawei: 7,
  lenovo: 20,
}


interface Todo {
  id: string,
  title: string,
  description: string,
  completed: boolean,
  createAt: number,
}

type SimpleTodo1 = Pick<Todo, 'id' | 'title' | 'completed'>
type SimpleTodo2 = Omit<Todo,'description' | 'createAt'>

