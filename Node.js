export default class Node {
	#value;
	#nextNode;

	constructor(value = null, nextNode = null) {
		this.#value = value;
		this.#nextNode = nextNode;
	}

	get value() {
		return this.#value;
	}

	set value(newValue) {
		this.#value = newValue;
	}

	get nextNode() {
		return this.#nextNode;
	}

	set nextNode(newNextNode) {
		this.#nextNode = newNextNode;
	}
}
