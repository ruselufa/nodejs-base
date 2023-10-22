#!/usr/bin/env node
import {getArgs} from './helpers/args.js'
import {prinHelp, printSuccess, printError, printWeather} from "./services/log.service.js";
import {getKeyValue, saveKeyValue, TOKEN_DICTIONARY} from "./services/storage.service.js";
import {getIcon, getWeather} from "./services/api.service.js";

const saveToken = async (token) => {
    if (!token.length) {
        printError('Не передан токен');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Токен сохранен')
    } catch (e) {
        printError(e.message);
    }
}

const saveCity = async (city) => {
    if (!city.length) {
        printError('Не передан город');
        return;
    }
    try {
        await getWeather(city);
        await saveKeyValue('city', city);
        printSuccess('Город сохранен')
    } catch (e) {
        if (e?.response?.status === 404 || e?.response?.status === 400) {
            printError('Такого города нет, не могу сохранить его')
        } else if (e?.response?.status === 401) {
            printError('Неверно указан токен')
        } else {
            printError(e.message)
        }
    }
}


const getForecast = async () => {
    try {
        const weather = await getWeather(process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city));
        printWeather(weather, getIcon(weather.weather[0].icon)); // красивый вывод погоды
    } catch (e) {
        if (e?.response?.status === 404) {
            printError('Неверно указан город')
        } else if (e?.response?.status === 401) {
            printError('Неверно указан токен')
        } else {
            printError(e.message)
        }
    }
}

const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        return prinHelp();
    }
    if (args.s) {
        return saveCity(args.s)
    }
    if (args.t) {
        return saveToken(args.t)
    }
    return getForecast();
};

initCLI();