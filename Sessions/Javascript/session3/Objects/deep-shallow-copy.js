const original = { a: 1, b: { x: 2 } };


function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj; // Return primitive values and null as is.
  }

  if (Array.isArray(obj)) {
    return obj.map(deepCopy); // Deep copy each array element.
  }

  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepCopy(obj[key]); // Deep copy object properties.
    }
  }

  return result;
}


const shallowCopy = { ...original };

shallowCopy.b.x = 5; // Modifying the nested object in the shallow copy affects the original.

console.log(original.b.x); // Output: 5

// ----------------------------------------- //

const deepCopyObj = deepCopy(original);


deepCopyObj.b.x = 5; // Modifying the nested object in the deep copy does not affect the original.

console.log(original.b.x); // Output: 2
