export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    // base case

    // both nodes are null
    if (!a && !b) {
        return true;
    }

    // one nodes is null
    if (!a || !b) {
        return false;
    }

    // values are not the same
    if (a.value !== b.value) {
        return false;
    }

    // recurse
    return compare(a.left, b.left) && compare(a.right, b.right);
}