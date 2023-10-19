// const start = performance.now();
// let x = 0
// for (let i = 0; i <1000000000; i++) {
//     x++;
// }
// console.log(x);
// setTimeout(() => {
//     console.log(performance.now() - start)
//     console.log('Прошла секунда')
// }, 1000)

// function myFunc(arg) {
//     console.log(`Аргумент => ${arg}`);
// }
//
// setTimeout(myFunc, 1500, 'Классный')

const timerId = setTimeout(() => {
    console.log('BOOM')
}, 5000);

setTimeout(() => {
    clearTimeout(timerId);
    console.log('Clear')
}, 1000)