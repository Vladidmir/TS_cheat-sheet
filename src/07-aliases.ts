type MyBool = false | true

type Pair = [string, string]
type Pairs = Pair[]

type ISkate = {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  name?: string;
  [key: string] : unknown;
}
