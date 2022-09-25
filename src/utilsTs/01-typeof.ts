import { average } from "../02-functions";

let str = 'Hello World'
type X = typeof str

type Fn = typeof average
const max: Fn = (...numbers) => Math.max(...numbers)
max(1, 2, 3 )

type returnFn = ReturnType<typeof average>





