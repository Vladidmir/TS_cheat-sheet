//Aliases type
//1. primitives, union
//2. cannot be expanded

//Interfaces
//1. When we want expand interface in future 
//2. Class with implements



// Создайте в двух вариантах (алиасах и интерфейсах) следующую структуру:

// Product : price, isNew, isSale, title

// Vehicle : wheels, year, brand

// Car: type, model +Product, +Vehicle

interface  IProduct  {
  title: string,
  price: number,
  isNew: boolean,
  isSale?: boolean,
}
interface IVehicle {
  wheels: number,
  years: number,
  brand: string,
}


interface ICar extends IProduct, IVehicle {
  type: string,
  model: string,
}

// const icar: Icar = {}


type  Product= {
  title: string,
  price: number,
  isNew: boolean,
  isSale?: boolean,
}
type  Vehicle = {
  wheels: number,
  years: number,
  brand: string,
}


type Car1 = Product & Vehicle & {
  type: string,
  model: string,
}


// const car: Car1 = {}