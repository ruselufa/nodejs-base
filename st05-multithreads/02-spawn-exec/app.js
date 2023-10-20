const { exec } = require('child_process');
const { spawn } = require('child_process');

// const childProcess = exec('ls', (err, stdout, stderr) => {
//     if (err) {
//         console.error(err.message);
//     };
//     console.log(`stdout: ${stdout}`);
//     console.log(`stderr: ${stderr}`);
// });
//
// childProcess.on('exit', (code) => {
//    console.log(`Код выхода: ${code}`)
// });

const childProcess = spawn('ls');

childProcess.stdout.on('data', (data) => {
   console.log(`Stdout: ${data}`)
});

childProcess.stderr.on('data', (data) => {
   console.log(`Stderr: ${data}`)
});

childProcess.stderr.on('data', (data) => {
   console.log(`Код выхода: ${data}`)
});

