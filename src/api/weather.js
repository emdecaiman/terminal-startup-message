import { getHourMessage, getHourOfDay } from "../utils/date.js";
import { IP_API, WEATHER_API } from "../config/config.js";
import { IPinfoWrapper } from "node-ipinfo";

const getLocation = async () => {
    try {
        const ipinfo = new IPinfoWrapper(IP_API);

        const response = await ipinfo.lookupIp("");

        if (!response) {
            throw new Error("Error: could not get IP address");
        }

        const location = response.loc.split(',').map(Number);
        return location;
    } catch (error) {
        console.log(error.message);
        return null
    }
}

export const displayWeather = async () => {
    try {
        const [latitude, longitude] = await getLocation();


        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API}`);
        if (!response.ok) {
            throw new Error("Error: Could not fetch weather");
        }

        const data = await response.json();

        const city = data.name;
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        const hourMessage = getHourMessage(getHourOfDay())
        console.log(`${hourMessage}, in ${city}, the weather is currently ${weatherDescription} with a temperature of ${temperature}°C. Humidity is at ${humidity}% and the wind speed is ${windSpeed} m/s.\n`);

    } catch (error) {
        console.log(error.message);
    }
}