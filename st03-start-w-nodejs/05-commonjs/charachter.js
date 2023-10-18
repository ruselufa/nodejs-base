// const { a } = require('./app.js')

console.log('Загружено character.js');

module.exports = function log () {
    console.log('log');
}

// let characters = [
//     {name: 'Frodo', hasRing: false},
//     {name: 'Bilbo', hasRing: false}
// ];

// function stealRing(characters, owner) {
//     return characters.map(c => {
//         if (c.name === owner) {
//             c.hasRing = true
//         } else {
//             c.hasRing = false
//         }
//     })
// }

