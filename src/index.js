import { getDateAndTime } from "./utils/date.js";
import { displayWeather } from "./api/weather.js";
import { displayVerseOfTheDay } from "./api/verse.js";

const runStartUp = async() => {
    try {
        getDateAndTime();
        await displayWeather();
        await displayVerseOfTheDay();


    } catch (error) {
        console.log(error.message);
    }
}

runStartUp();

