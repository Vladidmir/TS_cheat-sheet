
function f1(arg: {a: number, b: string}) {
  return arg.a + arg.b
};

type T0 = ReturnType<typeof f1>
type T1 = Parameters<typeof f1>


export {}