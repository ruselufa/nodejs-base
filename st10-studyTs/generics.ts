// generics помогают написать универсальные функции, которые работыют с различными переменными
// а также написать классы

interface HasLength {
    length: number;
}

function log<T extends HasLength, K>(obj: T, arr: K[]): K[] {
    obj.length;
    arr.length;
    obj.length;
    console.log(obj);
    return arr
}

// log<string>('asd');
// log<number>(5);

log<string, number>('sd', [1]);

interface IUser {
    name: string;
    age?: number;
    bid: <T>(sum: T) => boolean;
}

function bid<T>(sum: T): boolean {
    return true;
}

// Generics нужны для того, чтобы созданные функции могли работать с разными типами данных
// и не повторяли ненужный код, а также для классов