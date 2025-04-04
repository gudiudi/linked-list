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

		let current = this.#head;
		for (let i = 0; i < index; i++) {
			current = current.nextNode;
		}

		return current;
	}

	pop() {}
}
