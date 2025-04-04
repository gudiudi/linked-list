import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("fish");

console.log(list.size());
console.log(list.head());
console.log(list.tail());
