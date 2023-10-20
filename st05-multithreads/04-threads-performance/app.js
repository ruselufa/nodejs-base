const { Worker } = require('worker_threads');
const { fork } = require('child_process');
const perf_hooks = require('perf_hooks');
const forkProcess = fork('./04-threads-performance/fork.js')

const performanceObserver = new perf_hooks.PerformanceObserver((items, observer) => {
    console.log(items.getEntries());
    const entry1 = items.getEntriesByName('worker').pop();
    const entry2 = items.getEntriesByName('fork').pop();
    console.log(`${entry1.name}: ${entry1.duration}`);
    console.log(`${entry2.name}: ${entry2.duration}`);
    observer.disconnect();
})
performanceObserver.observe({entryTypes: ["measure", 'function']});

const workerFunction = (array) => {
    return new Promise((resolve, reject) => {
        performance.mark('startWorker');
        const worker = new Worker('./04-threads-performance/worker.js', {
            workerData: {
                array
            }
        });
        worker.on('message', (msg) => {
            console.log(worker.threadId);
            performance.mark('endWorker');
            performance.measure('worker', 'startWorker', 'endWorker');
            resolve(msg);
        });
        worker.on('error', (err) => {
            reject(err);
        });
        worker.on('exit', (msg) => {
            console.log('Worker завершил работу');
        });
    });

}

const forkFunction = (array) => {
    return new Promise((resolve, reject) => {
        performance.mark('startFork');
        forkProcess.on('message', (array) => {
            console.log(`Получено сообщение: ${array}`);
        });
        forkProcess.send({array});
        forkProcess.on('close', (code) => {
            console.log('Fork завершил работу');
        });
        performance.mark('endFork');
        performance.measure('fork', 'startFork', 'endFork');
        resolve()
    })
}

const main = async () => {
    await workerFunction([25, 20, 19, 48, 30, 50]);
    await forkFunction([25, 20, 19, 48, 30, 50]);
}

main();

// const { Worker } = require('worker_threads');
// const { fork } = require('child_process');
// const { performance, PerformanceObserver } = require('perf_hooks');
// const { readFileSync } = require('fs');
//
//
// const performanceObserver = new PerformanceObserver((items) => {
//     items.getEntries().forEach((entry) => {
//         console.log(`${entry.name}: ${entry.duration}`);
//     });
// });
// performanceObserver.observe({ entryTypes: ['measure'] });
//
// const workerFunction = (array) => {
//     return new Promise((resolve, reject) => {
//         performance.mark('worker start');
//         const worker = new Worker('./04-threads-performance/worker.js', {
//             workerData: {
//                 array
//             }
//         });
//         worker.on('message', (msg) => {
//             performance.mark('worker end');
//             performance.measure('worker', 'worker start', 'worker end');
//
//             resolve(msg);
//         });
//     });
// };
//
// const forkFunction = (array) => {
//     return new Promise((resolve, reject) => {
//         performance.mark('fork start');
//         const forkProcess = fork('./04-threads-performance/fork.js');
//         forkProcess.send({ array });
//         forkProcess.on('message', (msg) => {
//             performance.mark('fork end');
//             performance.measure('fork', 'fork start', 'fork end');
//             resolve(msg);
//         });
//
//     });
// };
//
// const main = async () => {
//     try {
//         await workerFunction([25, 20, 19, 48, 30, 50]);
//         await forkFunction([25, 20, 19, 48, 30, 50]);
//     } catch (e) {
//         console.error(e.message);
//     }
// };
//
// main();