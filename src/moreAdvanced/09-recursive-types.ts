type NestedNumbers = number | NestedNumbers[];

const nums: NestedNumbers = [1,2,3, [1,2, [1]]]
nums.push(1)
nums.push([1,[12]])

//JSON
type JSONPrimitive = string | number | null
type JSONObject = { [k: string] : JSONValue}
type JSONArray = JSONValue[]
type JSONValue = JSONPrimitive | JSONObject | JSONArray

function isJSON(arg: JSONValue) {}
