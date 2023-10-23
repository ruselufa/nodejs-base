import express from "express";
import { userRouter } from './users/users.js'

const port = 8000;
const app = express();

app.use((req, res, next) => {
    console.log('Время ', Date.now());
    next();
});
// app.use('/hello', (req, res, next) => {
//     console.log('Время ', Date.now());
//     next();
// });
app.get('/hello', (req, res) => {
    throw new Error('Error!!!');
});

app.use('/users', userRouter);

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(401).send(err.message)
})

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});




// ========= Ответы клиенту ===============

// app.get('/hello', (req, res) => {
//     res.cookie('token', 'asdf3212sd', {
//         domain: '',
//         path: '/',
//         secure: true,
//         expires: new Date(Date.now() + 60000) //ms
//     });
//     // res.clearCookie('token', { path }) // очистка куки токена если пользователь разлогиниться
//     res.set('Content-Type', 'text/plain'); // это задание контент типа если это нам необходимо
//     res.append('Warning', 'code'); // это добавить заголовок контент типа если это нам необходимо
//     res.type('application/json'); // это добавить заголовок контент типа если это нам необходимо
//     res.location(''); // передается строка локейшн хедер для урла
//     res.links({
//         // передача ссылок
//     });
//     // res.send('Привет');
//     res.status(404).end(); // если мы хотим ничего не отвечать или дать ошибку 404
// });

// ========= Маршрутизация ===============

// app.get('/hello', (req, res) => {
//     res.download('/test.pdf', 'tessst.pdf');
// });

// const cb = (req, res, next) => {
//     console.log('CB');
//     next();
// };

// app.get('/hello', (req, res) => {
//     res.redirect(301, 'https://example.com'); // перенаправление со статусом 301
// });

// app.get('/hello', (req, res) => {
//     res.send({success: true}); // отправка json'ом
// }); // можно записать массив колбека, а потом уже отработает финальный сенд
//
// app.get('/hello', (req, res) => {
//     res.status(201).json({success: true}); // отправка json и статуса 201
// }); // можно записать массив колбека, а потом уже отработает финальный сенд

// app.route('/user')
//     .get((req, res) => {
//         res.send('Привет'); // hello
//     }) // можно записать массив колбека, а потом уже отработает финальный сенд
//     .post((req, res) => {
//         res.send('Привет POST!')
//     })

// app.get('/hello', (req, res, next) => {
//     res.send('Привет'); // hello, hel?lo (helo
//     next();
// });
// // RegExp - сложный паттерн обработки роутов
// app.get(/.*a$/, (req, res) => {
//     res.send('Привет AAA'); // aasdfa
// })
//
// app.get('/hel+lo', (req, res) => {
//     res.send('Привет'); // hello, hellllo
// });
// app.get('/hel*lo', (req, res) => {
//     res.send('Привет'); // hello, helasdfasdfa
// });
// app.get('/he(la)?lo', (req, res) => {
//     res.send('Привет'); // helo, helalo // аналогично для звездочки и для всего
// });



//  Это с помощью HTTP стандартной функции НОДЫ

// const server = http.createServer((req, res) => {
//     switch (req.method) {
//         case 'GET':
//             switch (req.url) {
//                 case '/hello':
//                     res.statusCode = 200;
//                     res.setHeader('Content-Type', 'text/plain');
//                     res.end('Привет');
//                     break;
//             }
//             break;
//     }
//
// });
//
// server.listen(port, host, () => {
//     console.log(`Сервер запущен на ${host}:${port}`);
// });