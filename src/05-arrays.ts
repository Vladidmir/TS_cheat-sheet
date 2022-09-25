const numbers = [1, 2, 3, 4, 5]

const strs: string[] = []
const strs2: Array<string> = []

interface Car {
  wheels: number;
  brand: string;
}

const cars: Car[] = []
cars.push({wheels: 4, brand: 'lada' })

const arrOfArr: string[][] = []
arrOfArr.push([''])


function printArr(arr: unknown[]) : void {
  arr.forEach((el, index, array) => {
    console.log(el, index)
  })
}