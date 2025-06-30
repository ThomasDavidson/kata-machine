export default class MinHeap {
    public length: number;

    private data: number[];



    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        // add to heap
        this.data.push(value);

        // bubble up
        let idx = this.length;

        this.heapifyUp(idx);

        this.length++;

    }
    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        let head = this.data[0];

        this.length--;

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);

        return head;
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }
    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2)
    }

    private heapifyDown(idx: number): void{
        // end of heap
        if (idx >= this.length) {
            return;
        }

        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);

        if (lIdx >= this.length) {
            return;
        }
        
        const lV = this.data[lIdx];
        const rV = this.data[rIdx];
        const v = this.data[idx];

        if (lV > rV && v > rV) {
            this.data[idx] = rV;
            this.data[rIdx] = v;
            this.heapifyDown(rIdx);
        } else if (rV > lV && v > lV) {
            this.data[idx] = lV;
            this.data[lIdx] = v;
            this.heapifyDown(lIdx);
        }
    }

    private heapifyUp(idx: number): void {
        // basecases

        // no parent node
        if (idx === 0) {
            return;
        }

        const parent_idx = this.parent(idx);

        let value: number = this.data[idx];
        let parent_value = this.data[parent_idx];

        // parent is smaller than node
        if (parent_value < value) {
            return;
        }

        // swap
        this.data[parent_idx] = value;
        this.data[idx] = parent_value;

        this.heapifyUp(parent_idx)
    }
}

