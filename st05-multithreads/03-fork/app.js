const { fork } = require('child_process');

const forkProcess = fork('./03-fork/fork.js');

forkProcess.on('message', (msg) => {
    console.log(`Получено сообщение: ${msg}`);
})

forkProcess.on('close', (code) => {
    console.log(`Exited: ${code}`)
});

forkProcess.send('Ping');
forkProcess.send('disconnect');
