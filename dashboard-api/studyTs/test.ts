// базовые типы

let a: number = 5;
let b: string = 'asdfasdf';

let c = a + b;
// let d: number = a + b;
let e: number = a + Number(b);

let f = true;


let names: string[] = ['asdf', 'asdfadsf']
let number: number[] = [1, 2, 3];

let tup: [number, string] = [2, 'asdf'];

tup.push('asdf');

let g: any = 3;
g = 'asdf';
g = true;

let anyArr: any[] = ['sadfa', 123, true];


function greet(name: string): string {
    return name + 'Hi';
}

names.map((x: string) => x);

function coord(coord: {lat: number, long?: number}) {
    
}


/// union type

let universalId: number | string = 5;
universalId = 'sdf';

function prinId(id: number | string) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

function helloUser(user: string | string[]) {
    if (Array.isArray(user)) {
        console.log(user.join(', ') + 'Hi!')
    } else {
        console.log(user.toUpperCase() + ' Hi!')
    }
}


