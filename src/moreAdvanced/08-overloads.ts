function add(a: number, b:number): number;
function add(a: string, b:string): string;

function add(a: any, b: any): any {
  return a + b
}

add('1' ,'1')

type asuncCb = (res: number) => number

function asuncSum(a: number, b: number): Promise<number>
function asuncSum(a: number, b: number, cb: asuncCb): number
function asuncSum(a: number, b: number, cb?: asuncCb): any {
  const result = a + b;
  if (cb) {
    return cb(result)
  }

  return Promise.resolve(result)
}

asuncSum(1, 2)

function head (value: string): string
function head (value: number[]): number
function head (value: boolean[]): boolean
function head(value: any): any {
  return value[0];
}

const q = head('ssd')
const t = head([1,2,3])

export {}