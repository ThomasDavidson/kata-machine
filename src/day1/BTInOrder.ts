export default function in_order_search(head: BinaryNode<number>): number[] {
    let list: number[] = [];

    traverse(head, list);

    console.table(list);

    return list;
}

function traverse(node: BinaryNode<number>, list: number[]) {

    if (node.left) {
        traverse(node.left, list);
    }

    list.push(node.value);

    if (node.right) {
        traverse(node.right, list);
    }
}

