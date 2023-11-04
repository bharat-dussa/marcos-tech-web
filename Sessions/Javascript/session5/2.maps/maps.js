/**
 * Map in JavaScript is a data structure for storing key-value pairs, like a dictionary. 
 * It's similar to objects but offers more features and order preservation.
 * Key Map methods include set, get, has, delete, and more. 
 * 
 * Here's a brief overview:
 * 
 * set(key, value): Add a key-value pair.
 * get(key): Retrieve a value using the key.
 * has(key): Check if a key exists.
 * delete(key): Remove a key-value pair.
 * size: Get the number of key-value pairs.
 * keys(): Get all keys.
 * values(): Get all values.
 * entries(): Get key-value pairs.
 * forEach(callbackFn): Perform an action for each key-value pair.
 */



const myMap = new Map();
myMap.set('name', 'John');
console.log(myMap.get('name')); // 'John'
console.log(myMap.size); // 1
