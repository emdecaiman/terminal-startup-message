require("dotenv").config();
const VERSE_URL = process.env.VERSE_URL;
const IP_API = process.env.IP_API;
const WEATHER_API = process.env.WEATHER_API;

const getLocation = async () => {
    try {
      
        const { IPinfoWrapper } = require("node-ipinfo");
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

const displayWeather = async () => {
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

        console.log(`In ${city}, the weather is currently ${weatherDescription} with a temperature of ${temperature}°C. Humidity is at ${humidity}% and the wind speed is ${windSpeed} m/s.`);
        
    } catch (error) {
        console.log(error.message);
    }
}

// Async/Await method
const displayVerseOfTheDay = async () => {
    try {
        const response = await fetch(VERSE_URL);

        if (!response.ok) {
            throw new Error("Error: Could not fetch verse of the day");
        }

        const data = await response.json();

        let verseReference = data.verse.details.reference;
        let verseText = data.verse.details.text;
        console.log(`${verseReference} - ${verseText}`);
    } catch (error) {
        console.log(error.message);
    }
}

const runStartUp = () => {
    displayWeather();
    displayVerseOfTheDay();
}

runStartUp();

