export default function dijkstra_list(source: number, needle: number, graph: WeightedAdjacencyList): number[] {

    let previous: number[] = new Array(graph.length).fill(-1);
    let seen: boolean[] = new Array(graph.length).fill(false);
    let dists: number[] = new Array(graph.length).fill(Infinity);
    dists[source] = 0;

    while (hasUnvisited(seen, dists)) {
        const curr = getLowestUnvisted(seen, dists);
        seen[curr] = true;


        let adjs = graph[curr];
        for (let i = 0; i < adjs.length; i++) {
            const edge = adjs[i];

            if (seen[edge.to]) {
                continue;
            }

            const dist = dists[curr] + edge.weight;
            if (dist < dists[edge.to]) {
                dists[edge.to] = dist;
                previous[edge.to] = curr;
            }
        }
    }

    const out: number[] = [];
    let curr = needle;
    while (previous[curr] !== -1) {
        out.push(curr)
        curr = previous[curr];
    }
    out.push(source);

    return out.reverse();
}

function lowest_edge(node: number, graph: WeightedAdjacencyList): GraphEdge | null {
    let edges = graph[node];

    if (edges.length === 0) {
        return null
    }

    let closest_edge: GraphEdge = { to: Infinity, weight: -1 } as GraphEdge;

    for (let i = 0; i < edges.length; i++) {
        const edge = edges[i];
        if (edge.weight < closest_edge.weight) {
            closest_edge = edge;
        }
    }
    return closest_edge;
}

function getLowestUnvisted(seen: boolean[], dists: number[]): number {

    let lowest_dist = Infinity;
    let lowest_edge = -1;

    for (let i = 0; i < dists.length; i++) {
        if (dists[i] < lowest_dist && !seen[i]) {
            lowest_dist = dists[i];
            lowest_edge = i;
        }
    }
    return lowest_edge;
}

function hasUnvisited(seen: boolean[], dists: number[]): boolean {
    return seen.some((s, i) => !s && dists[i] < Infinity);
}