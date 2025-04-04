import Node from "./Node.js";

export default class LinkedList {
	#head;
	#tail;
	#size;

	constructor() {
		this.#head = null;
		this.#tail = null;
		this.#size = 0;
	}

	get head() {
		return this.#head;
	}

	get tail() {
		return this.#tail;
	}

	get size() {
		return this.#size;
	}

	append(value) {
		this.#size++;

		const node = new Node(value);

		if (!this.#head) {
			this.#head = node;
			this.#tail = node;
			return;
		}

		this.#tail.nextNode = node;
		this.#tail = node;
	}

	prepend(value) {
		this.#size++;

		const node = new Node(value, this.#head);

		this.#head = node;

		if (!this.#tail) this.#tail = node;
	}

	at(index) {
		if (index < 0 || index > this.#size - 1) return null;

		let currentNode = this.#head;
		for (let i = 0; i < index; i++) {
			currentNode = currentNode.nextNode;
		}

		return currentNode;
	}

	pop() {
		if (this.#size === 0) return null;

		const lastNode = this.#tail;

		if (this.#head === this.#tail) {
			this.#head = null;
			this.#tail = null;
		} else {
			let currentNode = this.#head;
			while (currentNode.nextNode !== lastNode) {
				currentNode = currentNode.nextNode;
			}

			currentNode.nextNode = null;
			this.#tail = currentNode;
		}

		this.#size--;
		return lastNode;
	}

	#search(value) {
		let currentNode = this.#head;
		let index = 0;
		while (currentNode !== null) {
			if (currentNode.value === value) return { found: true, index };
			currentNode = currentNode.nextNode;
			index++;
		}

		return { found: false };
	}

	contains(value) {
		const search = this.#search(value);
		return search.found;
	}

	find(value) {
		const search = this.#search(value);
		return search.found ? search.index : null;
	}

	toString() {
		let result = "";
		let currentNode = this.#head;
		while (currentNode !== null) {
			result += `(${currentNode.value}) -> `;
			currentNode = currentNode.nextNode;
		}

		return `${result}${currentNode}`;
	}
}
