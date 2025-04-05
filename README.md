# Singly Linked List Implementation

## Features

* Stores data in Node objects.
* Keeps track of `head`, `tail`, and `size`.
* Provides methods for common linked list operations:
  * Adding elements (`append`, `prepend`, `insertAt`)
  * Removing elements (`pop`, `removeAt`)
  * Accessing elements (`at`)
  * Searching (`contains`, `find`)
  * Utility (`toString`)
* Uses private class fields (`#`) for internal state protection.


## Usage

```js
import LinkedList from './LinkedList.js';

const list = new LinkedList();

list.append('apple');
list.append('banana');
list.prepend('start');

console.log(list.toString()); // Output: ( start ) -> ( apple ) -> ( banana ) -> null
console.log(list.size);      // Output: 3
```