type coord = {lat: number, long: number}; // типы описывают не только объекты, но и простые типы

type ID = number | string;

type myString = string;

interface ICoord { // Интерфейсы описывают только объекты
    lat: number;
    long: number;
}

function compute1(coord: coord) {

}
function compute2(coord: ICoord) {

}
function compute3(coord: ID) {

}

// interface Animal {
//     name: string;
// }
//
// interface Dog extends Animal {
//     tail?: boolean;
// }
//
// const dog: Dog = {
//     name: "asdf";
//     tail: true;
// }
//
// dog.tail = false;


// type Animal = {
//     name: string;
// }
//
// type Dog = Animal & {
//     tail: boolean;
// }
//
// const dog: Dog = {
//     name: 'asdf',
//     tail: true
// }

interface Dog {
    name: string;
}

interface Dog { // интерфейс мы можем дополнить, а типы нет
    tail: boolean;
}

const dog: Dog = {
    name: 'asdf',
    tail: true
}

// Всегда использовать интерфейс, если не нужны какие-то фичи типов