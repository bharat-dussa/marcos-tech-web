/**
 * Map is a collection of keyed data items, just like an Object.
 * But the main difference is that Map allows keys of any type.
 * 
 * Here's a brief overview:
 * 
 * diff from Objects - 
 * 1. Key Types:  In Obj keys are string or symbol, but in Map keys can be any type
 * 2. Key Order: Maps maintain key order while Objects doesn't maintain order.
 * 3. Size Property: Objects do not have built in property for measure length, Map has size.
 * 4. Iteration: for objects, to iterate you need to use for...in, Object.keys(), Object.values(), or Object.entries().
 * 5. Garbage Collection: If Key is removed Obj has still accessed to it, In Map it is released.
 * 
 * 
 * set(key, value): Add a key-value pair.
 * get(key): Retrieve a value using the key.
 * has(key): Check if a key exists.
 * delete(key): Remove a key-value pair.
 * size: Get the number of key-value pairs.
 * clear()
 * keys(): Get all keys.
 * values(): Get all values.
 * entries(): Get key-value pairs.
 * forEach(callbackFn): Perform an action for each key-value pair.
 */



const myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', '20');
console.log(myMap.entries()); // 'John'
// console.log(myMap.entries()); // 'John'
// console.log(myMap); // 1
