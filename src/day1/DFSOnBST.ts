export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    // base case
    if (head.value === needle) {
        return true;
    }


    let found = false;

    if (head.left && head.value > needle) {
        found = dfs(head.left, needle);
    } else if (head.right && head.value < needle) {
        found = dfs(head.right, needle);
    }

    return found;
}