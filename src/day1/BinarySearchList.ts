export default function bs_list(haystack: number[], needle: number): boolean {

    let low: number = 0;
    let high: number = haystack.length;


    do {
        const index: number = Math.floor(low + (high - low) / 2);
        const element: number = haystack[index];

        if (element === needle) {
            return true
        } else if (element < needle) {
            low = index + 1
        } else if (element > needle) {
            high = index
        }

    } while (low < high);

    return false
}