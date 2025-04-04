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
}
