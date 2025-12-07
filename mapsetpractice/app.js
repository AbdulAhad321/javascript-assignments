/* ---------------------------------------------------
   ===============   MAP — ALL METHODS   ===============
-----------------------------------------------------*/

// Create a Map
const myMap = new Map([
  ["name", "Abdul Ahad"],
  ["age", 21]
]);

// set(key, value) — Add or update
myMap.set("country", "Pakistan");

// get(key) — Get value
console.log("Get name:", myMap.get("name"));

// has(key) — Check existence
console.log("Has age?", myMap.has("age"));

// delete(key) — Remove key
myMap.delete("age");

// size — Total entries
console.log("Map Size:", myMap.size);

// clear() — Remove all entries
// myMap.clear(); // Uncomment to test

// keys() — Get all keys
console.log("Keys:");
for (const key of myMap.keys()) {
  console.log(key);
}

// values() — Get all values
console.log("Values:");
for (const value of myMap.values()) {
  console.log(value);
}

// entries() — Get [key, value] pairs
console.log("Entries:");
for (const entry of myMap.entries()) {
  console.log(entry);
}

// forEach() — Loop through map
myMap.forEach((value, key) => {
  console.log(`forEach → ${key}: ${value}`);
});

/* ---------------------------------------------------
   ===============   SET — ALL METHODS   ===============
-----------------------------------------------------*/

// Create a Set
const mySet = new Set([1, 2, 3, 3, 4]); // duplicates ignored

// add(value) — Add item
mySet.add(5);

// has(value) — Check value
console.log("Has 3?", mySet.has(3));

// delete(value) — Remove single item
mySet.delete(2);

// size — Total items
console.log("Set Size:", mySet.size);

// clear() — Remove all items
// mySet.clear(); // Uncomment to test

// values() — Same as keys() in Set
console.log("Values:");
for (const value of mySet.values()) {
  console.log(value);
}

// keys() — Same as values() in Set
console.log("Keys:");
for (const key of mySet.keys()) {
  console.log(key);
}

// entries() — Returns [value, value]
console.log("Entries:");
for (const entry of mySet.entries()) {
  console.log(entry);
}

// forEach() — Loop through Set
mySet.forEach(value => {
  console.log(`forEach → ${value}`);
});

/* ---------------------------------------------------
   ===== BONUS: COMMON MAP & SET PRACTICAL USES ======
-----------------------------------------------------*/

// Remove duplicates from an array using Set
const arr = [10, 20, 20, 30, 40, 40];
const unique = [...new Set(arr)];
console.log("Unique Array:", unique);

// Convert Map to object
const mapToObj = Object.fromEntries(myMap);
console.log("Map to Object:", mapToObj);

// Convert object to Map
const obj = { a: 1, b: 2 };
const objToMap = new Map(Object.entries(obj));
console.log("Object to Map:", objToMap);
