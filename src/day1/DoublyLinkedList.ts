type Node<T> = {
    value: T,
    next?: Node<T>,
    prev?: Node<T>,
}

export default class DoublyLinkedList<T> {
    public length: number;

    private head?: Node<T>;
    private tail?: Node<T>;


    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = this.head = node;
            return;
        }
        const head = this.head;
        head.prev = node;

        node.next = head;

        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        if (!this.head) {
            return;
        }

        if (this.length < idx) {
            throw new Error("Out of bounds");
        } else if (idx === this.length) {
            this.append(item)
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }

        this.length++;

        const node = { value: item } as Node<T>;

        let curr = this.head;
        for (let i = 0; i < idx && curr.next; i++) {
            curr = curr.next;
        }
        if (curr.value != this.get(idx)) {
            throw new Error("Err");
        }

        // update the node before the inserted node
        const prev = curr.prev;
        if (prev) {
            prev.next = node;
            node.prev = prev;
        }
        // update the node after the inserted node
        curr.prev = node;
        node.next = curr;
    }
    append(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;

        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        const curr_tail = this.tail;
        curr_tail.next = node;

        node.prev = curr_tail;
        node.next = undefined;

        this.tail = node;
    }
    remove(item: T): T | undefined {
        if (!this.head) {
            return;
        }
        let node = this.head;

        for (let i = 0; i < this.length && node.next; i++) {
            if (node.value === item) {
                break;
            }
            node = node.next;
        }

        if (node.value != item) {
            return;
        }

        this.length--;

        // one item left
        if (!node.next && !node.prev) {
            this.head = this.tail = undefined
            // item at head
        } else if (node.next && !node.prev) {
            this.head = node.next;
            node.next.prev = undefined;

            // item at tail
        } else if (!node.next && node.prev) {
            this.tail = node.next;
            node.prev.next = undefined;
        }


        // item in middle

        return node.value;

    }

    get(idx: number): T | undefined {
        if (!this.head) {
            return;
        }
        if (this.length < idx) {
            return;
        }

        let node = this.head;
        for (let i = 0; i < idx && node.next; i++) {
            node = node.next
        }

        return node.value;
    }
    removeAt(idx: number): T | undefined {
        if (idx > this.length) {
            return;
        }

        if (!this.head) {
            return;
        }

        let node = this.head;
        for (let i = 0; i < idx && node.next; i++) {
            node = node.next;
        }

        this.length--;
        let next = node.next;
        let prev = node.prev;

        if (next) {
            next.prev = prev;
        } else {
            this.tail = prev;
        }

        if (prev) {
            prev.next = next;
        } else {
            this.head = next;
        }


        return node.value;
    }

    private debug() {
        let nodes: Node<T>[] = [];
        if (!this.head) {
            console.table(this);
            return;
        }

        let node = this.head;
        nodes.push(node)

        for (let i = 0; i < this.length && node.next; i++) {
            node = node.next
            nodes.push(node)
        }
        console.table(nodes)
    }
}