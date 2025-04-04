import Node from "./Node.js";

export default class LinkedList {
	#head;
	#size;

	constructor() {
		this.#head = null;
		this.#size = 0;
	}

	append(value) {
		this.#size++;

		const node = new Node(value);

		if (!this.#head) {
			this.#head = node;
			return;
		}

		let current = this.#head;
		while (current.nextNode !== null) {
			current = current.nextNode;
		}

		current.nextNode = node;
	}

	prepend(value) {
		this.#size++;

		const node = new Node(value, this.#head);

		this.#head = node;
	}

	size() {
		return this.#size;
	}

	head() {
		return this.#head.value;
	}

	tail() {
		let current = this.#head;
		while (current !== null) {
			if (current.nextNode === null) return current.value;
			current = current.nextNode;
		}

		return this.#head.value;
	}

	at(index) {
		if (index < 0 || index > this.size() - 1) return -1;

		let current = this.#head;
		let currentIndex = 0;
		while (current !== null) {
			if (currentIndex === index) return current.value;
			currentIndex++;
			current = current.nextNode;
		}

		return -1;
	}
}
