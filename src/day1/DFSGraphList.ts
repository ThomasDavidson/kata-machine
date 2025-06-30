function walk(graph: WeightedAdjacencyList, curr: number, needle: number, visited: boolean[], path: number[]): boolean {

    if (visited[curr]) {
        return false;
    }
    visited[curr] = true;

    path.push(curr)
    if (curr === needle) {
        return true;
    }

    let edges = graph[curr];

    for (let i = 0; i < edges.length; i++) {
        const edge = edges[i];

        let connected = walk(graph, edge.to, needle, visited, path)

        if (connected) {
            return true;
        }
        
    }
    
    path.pop()

    return false;
}

export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {

    let visited: boolean[] = new Array(graph.length).fill(false);
    let path: number[] = [];

    walk(graph, source, needle, visited, path)

    if (path.length === 0) {
        return null;
    }

    return path;
}