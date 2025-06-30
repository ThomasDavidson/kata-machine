export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {

    const seen = new Array(graph.length).fill(false);
    const previous = new Array(graph.length).fill(-1);
    const queue = [source];

    seen[source] = true;

    do {

        let curr = queue.shift() as number;
        if (curr === needle) {
            break;
        }

        for (let i = 0; i < graph.length; i++) {
            const adjacent = graph[curr][i];

            if (adjacent === 0) {
                continue;
            }
            if (seen[i]) {
                continue;
            }
            queue.push(i);
            seen[curr] = true;
            previous[i] = curr;

        }

    } while (queue.length);

    // build it backword


    let curr = needle;
    let output: number[] = [];
    while (previous[curr] !== -1) {
        output.push(curr)
        curr = previous[curr];

    }
    if (output.length) {
        output.push(source);
        return output.reverse();
    }

    return null;
}