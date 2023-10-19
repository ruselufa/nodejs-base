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

// const timerId = setTimeout(() => {
//     console.log('BOOM')
// }, 5000);
//
// setTimeout(() => {
//     clearTimeout(timerId);
//     console.log('Clear')
// }, 1000);


// const intervalId = setInterval(() => {
//     console.log(performance.now());
// }, 1000);
//
// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log('Очищено')
// }, 5050)

// console.log('Перед');
//
// setImmediate(() => {
//     console.log('После всего')
// })
//
// console.log('После');

const timerId = setTimeout(() => {
    console.log('BOOM')
}, 5000);

timerId.unref();

setImmediate(() => {
    timerId.ref(timerId)
})