type Node<T> = {
    value: T,
}

export default class ArrayList<T> {
    public length: number;

    private array: [Node<T>?];

    constructor() {
        this.length = 0;
        this.array = [];
    }

    prepend(item: T): void {

    }
    insertAt(item: T, idx: number): void {
        const node = { value: item } as Node<T>;
 

        for (let i = idx; i < this.length; i++) {
            this.array[this.length] = this.array[this.length - idx];
        }

    }

    append(item: T): void {
        const node = { value: item } as Node<T>;
        this.array[this.length] = node;
        this.length++;
    }

    remove(item: T): T | undefined {

        let idx = -1;

        // check if item is in list
        for (let i = 0; i < this.length; i++) {
            const element = this.array[i];
            if (element === item) {
                idx = i;
                break;
            }
        }

        // if not in list return undefined
        if (idx === -1) {
            return undefined;
        }

        // remove item
        const element = this.array[idx];

        this.removeAt(idx);

        return element?.value;
    }
    get(idx: number): T | undefined {
        console.table(["get", idx]);
        console.table(this);
        return this.array[idx]?.value;
    }

    removeAt(idx: number): T | undefined {
        console.table(["remove at", idx]);
        console.table(this);

        if (idx > this.length) {
            console.log("Out of bounds");
            return undefined;
        }

        // remove item
        const element = this.array[idx];

        for (let i = idx; i < this.length - 1; i++) {
            this.array[i] = this.array[i + 1];
        }
        this.array[this.length - 1] = undefined;

        // decrement length
        this.length--;
        console.table(this);

        return element?.value;
    }
}