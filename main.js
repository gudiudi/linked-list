import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("fish");
list.prepend("parrot");

/*
console.log(JSON.stringify(list.pop().toJSON(), null, 2));
console.log(list.size);
console.log(JSON.stringify(list.head?.toJSON() || null, null, 2));
console.log(JSON.stringify(list.tail?.toJSON() || null, null, 2));
console.log(list.at(4));
*/

console.log(list.contains("dog"));
