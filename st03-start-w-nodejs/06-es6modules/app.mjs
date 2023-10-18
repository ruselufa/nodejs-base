// import { characters, greet } from './charachers.mjs'; // импорт конкретных модулей
// import * as char from './charachers.mjs'; // импорт всего с исп любого имени
// import asd from './charachers.mjs'; // дефолтный импорт (при заданном дефолтном экспорте)
// import asd, { characters, greet } from './charachers.mjs'; // дефолтный импорт и добавить остальные экспорты
// import asd, { characters, greet as hello } from './charachers.mjs'; // дефолтный импорт и добавить остальные экспорты
// import asd, * as word from './charachers.mjs'; // дефолтный импорт и добавить остальные экспорты

async function main() {
    try {
        const { characters, greet } = await import('./charachers.mjs') // асинхронный импорт модулей, не блокирует поток
        for (const c of characters) {
            greet(c);
        }
    } catch (e) {
        console.log('Ошибка')
    }
};

main();

// for (const c of characters) {
//     greet(c);
// }

// for (const c of char.characters) {
//     char.greet(c);
// }

// for (const c of word.characters) {
//     word.greet(c);
// }

// for (const c of characters) {
//     hello(c);
// }

// asd();