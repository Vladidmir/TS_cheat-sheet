
interface DataModel {
  id: string,
  title: string,
  elements: {
    hedader: {
      title: string,
      description: string,
      links: string[],
    },
    footer: {
      description: string,
      links: string[],
    },
    body: [
      {
        title: string,
        content: {},
      },
    ]
  }
}

type T0 = DataModel['elements']['footer']
type SomeTuple = [number, string, boolean, ...string[]]
const arr: SomeTuple = [1, 'asd', true, '1', '2']
type T1 = SomeTuple[1]

const sizes = ['small', 'medium', 'large'] as const
type T2 = typeof sizes[number]


export {}