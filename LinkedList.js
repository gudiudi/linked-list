import Node from "./Node.js";

export default class LinkedList {
	#head;

	constructor() {
		this.#head = null;
	}

	append(value) {
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

	head() {
		return this.#head;
	}
}
