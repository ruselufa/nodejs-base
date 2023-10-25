// let a1 = 'asdfasdf';
//
// a1 = "asdf";
//
// const b1 = 'asdf';
// const b2: 'hi' = "dhi";
//
// type direction = 'left' | 'right';
//
// function moveDog(direction: direction): -1 | 0 | 1 {
//     switch (direction) {
//         case "left":
//             return -1;
//         case "right":
//             return 1;
//         default:
//             return 0;
//     }
// };
//
// moveDog('left');
//
// interface IConnection {
//     host: string;
//     port: number;
// }
//
// function connect(connection: IConnection | "default") {
//
// }
//
// connect({host, port});

const connction = {
    host: 'localhost',
    protocol: 'https' as 'https' // кастуем строку которая может быть любая, ограниченному числу литераов
}

const a1: any = 5;
let c1: number = a1 as number;
let c2 = <number>a; // не рекомендуется в реакте и jsx элементах, будет невалидно
let c3 = a as number;

function connect(host: string, protocol: 'http' | 'https') {

}
connect(connction.host, connction.protocol)
