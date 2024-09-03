const WEEKDAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const getDateAndTime = () => {
    const today = new Date();
    const weekday = WEEKDAY[today.getDay()];
    const date = today.toLocaleDateString();
    const time = today.toLocaleTimeString();

    console.log(`${weekday}, ${date} ${time}\n`);
}

export const getHourOfDay = () => {
    const today = new Date();

    return today.getHours();
}

export const getHourMessage = (hour) => {
    if (hour < 12) {
        return "Good Morning"
    } else if (hour < 18) {
        return "Good Afternoon"
    } else {
        return "Good Evening"
    }
}
