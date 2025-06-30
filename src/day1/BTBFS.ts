export default function bfs(head: BinaryNode<number>, needle: number): boolean {


    let q = [head];

    while (q.length) {
        const curr = q.shift();
        if (!curr) {
            break;
        }

        if (needle === curr.value) {
            return true;
        }

        if (curr.left) {
            q.push(curr.left);
        }
        if (curr.right) {
            q.push(curr.right);
        }

    }
    return false;
}