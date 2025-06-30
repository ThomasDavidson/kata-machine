export default function two_crystal_balls(breaks: boolean[]): number {

    let lo = 0;
    let hi = breaks.length;
    let jmp = Math.floor(Math.sqrt(breaks.length));


    let i = jmp;
    for (; i < breaks.length; i += jmp) {

        if (breaks[i]) {
            break;
        }
    }

    for (let j = i - jmp; j < i && j < breaks.length; j++) {
        if (breaks[j]) {
            return j
        }
    }
    return -1

}