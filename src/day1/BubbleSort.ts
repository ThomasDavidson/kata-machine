export default function bubble_sort(arr: number[]): void {

    for (let i = 0; i < arr.length; i++) {

        let last = arr.length - 1 - i;
        for (let j = 0; j < last; j++) {
            const f = arr[j];
            const s = arr[j + 1];
            if (f > s) {
                // swap variables if the next value in the array is smaller
                arr[j] = s;
                arr[j + 1] = f;
            }

        }
    }
}