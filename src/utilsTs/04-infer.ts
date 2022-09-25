function fromPair(pair: [string, string]) {
  const [key, value] = pair

  return {
    [key] : value
  }
}

type FirstArg<T> = T extends (first: infer First, ...arg: any[]) => any ? First : never

const myPair: FirstArg<typeof fromPair> = ['myLey', 'myValue']

fromPair(myPair)

export {}