function arrayToList(array) {
  let list = null;
  for (let k = array.length; k >= 0; k--) {
    list = {value: array[k], rest: list}
  }
  return list
}

function listToArray(list) {
  const array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value)
  }
  return array
}

function prepend(value, list) {
  return {value, rest: list}
}

function nth(list, num) {
  if (!list) return undefined;
  else if (num === 0) return list.value;
  else return nth(list.rest, num - 1)
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
