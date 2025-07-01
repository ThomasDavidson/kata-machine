
function hashGen<T extends (string | number)>(key: T): number {
    let hash = 0
    if (typeof key === "string") {
        hash = hashCode(key)
    } else if (typeof key === "number") {
        hash = key % this.capacity;
    }
    return hash
}
function hashCode(str: string): number {
    var h: number = 0;
    for (var i = 0; i < str.length; i++) {
        h = 31 * h + str.charCodeAt(i);
    }
    return h & 0xFFFFFFFF
}

class Value<T extends (string | number), V> {
    key: T;
    value: V;
}

export default class Map<T extends (string | number), V> {
    values: (Value<T, V> | undefined)[]
    length: number;

    constructor(private capacity: number = 10) {
        this.values = []
        this.length = 0;
    }

    get(key: T): V | undefined {
        let hash = hashGen(key);

        if (this.length == 0) {
            return undefined
        }

        for (let i = 0; i < this.capacity; i++) {
            let index = (hash + i) % this.capacity;
            const element = this.values[index];
            if (element == undefined) {
                return undefined
            }
            if (element.key == key) {
                return element.value
            }
        }

        return undefined
    }

    set(key: T, value: V): void {
        let hash = hashGen(key);
        let hashValue: Value<T, V> = { key, value } as Value<T, V>;

        for (let i = 0; i < this.capacity; i++) {
            let index = (hash + i) % this.capacity;
            const element = this.values[index];
            if (element == undefined || element.key == key) {
                this.values[index] = hashValue;
                this.length++
                return
            }

        }


    }
    delete(key: T): V | undefined {
        let hash = hashGen(key);

        if (this.length == 0) {
            return undefined
        }

        for (let i = 0; i < this.capacity; i++) {
            let index = (hash + i) % this.capacity;
            const element = this.values[index];

            if (element == undefined) {
                return undefined
            }
            if (element.key == key) {
                this.values[index] = undefined;
                this.length--
                return element.value
            }

        }
        return undefined

    }
    size(): number {
        return this.length
    }
}

