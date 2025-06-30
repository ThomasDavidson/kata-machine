type Node<T> = {
    value: T,
    previous?: Node<T>,
}

export default class Stack<T> {
    public length: number;



    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;
        if (!this.head) {
            this.head = node;
        } else {
            node.previous = this.head;
            this.head = node;
        }
        
        this.length++;
    }

    pop(): T | undefined {
        if (!this.head) {
            console.table(this);
            return undefined;
        }
        const head = this.head;
        this.head = this.head.previous;

        this.length--;
        if (this.length === 0) {
            this.head = undefined;
        }

        return head?.value;
    }

    peek(): T | undefined {
        return this.head?.value
    }
}