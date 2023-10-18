const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const logDnConnection = () => {
    console.log('DB connected');
};

myEmitter.addListener('connected', logDnConnection);
myEmitter.emit('connected');

myEmitter.removeListener('connected', logDnConnection);
// myEmitter.off('connected', logDnConnection);
// myEmitter.removeAllListeners('connected');
myEmitter.emit('connected');

myEmitter.on('msg', (data) => {
    console.log(`Получил: ${data}`);
});
myEmitter.prependListener('msg', (data) => {
    console.log('prepend')
})
myEmitter.emit('msg', 'Привет, получи мое сообщение');

myEmitter.once('off', () => {
    console.log('Я вызвался 1 раз и не больше');
});

myEmitter.emit('off');
myEmitter.emit('off');

console.log(myEmitter.getMaxListeners())
myEmitter.setMaxListeners(1);
console.log(myEmitter.getMaxListeners())

console.log(myEmitter.listenerCount('msg'));
console.log(myEmitter.listenerCount('off'));



console.log(myEmitter.listeners('msg'));
console.log(myEmitter.eventNames());

myEmitter.on('error', (err) => {
    console.log(`Произошла ошибка: ${err.message}`);
})

myEmitter.emit('error', new Error('BOOM!'));

// ===========Event target==============

const target = new EventTarget();
const logTarget = () => {
    console.log('Connected to target');
}

target.addEventListener('connected', logTarget);
target.dispatchEvent(new Event('connected'));