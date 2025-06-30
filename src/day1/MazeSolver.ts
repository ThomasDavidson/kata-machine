export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(start, maze, wall, end, seen, path);

    return path;
}

const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
]

function walk(curr: Point, maze: string[], wall: string, end: Point, seen: boolean[][], path: Point[]): boolean {

    // off the maze
    if (curr.x < 0 || curr.x >= maze[0].length ||
        curr.y < 0 || curr.y >= maze.length) {
        return false;
    }

    // Wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // Ending
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }
    // seen
    if (seen[curr.y][curr.x]) {
        return false;
    }
    seen[curr.y][curr.x] = true;

    path.push(curr);
    // recursive case
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        const point = { x: curr.x + x, y: curr.y + y } as Point;
        if (walk(point, maze, wall, end, seen, path)) {
            return true;
        }
    }

    // post
    path.pop();
    return false;

}