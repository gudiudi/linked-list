import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("fish");
list.prepend("parrot");

console.log(list.size);
console.log(JSON.stringify(list.head.toJSON(), null, 2));
console.log(JSON.stringify(list.tail.toJSON(), null, 2));
console.log(list.at(4));
