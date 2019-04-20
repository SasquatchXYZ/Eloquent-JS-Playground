const deepEqual = (a, b) => {

  if (a === b) {
    // console.log('check1');
    return true;
  }

  if (a === null || typeof a !== 'object' || b === null || typeof b !== 'object') {
    // console.log('check2');
    return false
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    // console.log('check3');
    return false;
  }

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      // console.log('check4');
      return false
    }
  }

  return true;

};

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
