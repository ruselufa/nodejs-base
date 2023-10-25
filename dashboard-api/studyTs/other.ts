let a2 = 'Привет';

if (typeof a === 'string') {

}

let b2: typeof a;

// keyof

type Coord1 = {
    lat: number;
    long: number;
}

type P = keyof Coord1;

let a3: P = 'long';

// тип null

function log1(a: string | null): void {
    if (a === null) {

    } else {
        a.toUpperCase(); // а так ошибки нет
    }
    a?.toUpperCase(); // работает только с ?, как optionalChaining
}

function log2(a: string | null): void {
    a!.toUpperCase() // здесь лучше всего сделать корректную проверку
}

// const a4: bigint = BigInt(100);
// const b4: symbol = Symbol('asdfasdf');