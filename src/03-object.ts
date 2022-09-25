
interface ICar {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  name?: string;
  [key: string] : unknown;
}

const car: ICar = {
  wheels: 4,
  brand: 'BMW',
  type: 'sidan',
  isNew: false,
}

car['go'] = true;


export {}






