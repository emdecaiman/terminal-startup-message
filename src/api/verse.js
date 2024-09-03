import { VERSE_URL } from "../config/config.js";

export const displayVerseOfTheDay = async () => {
    try {
        const response = await fetch(VERSE_URL);

        if (!response.ok) {
            throw new Error("Error: Could not fetch verse of the day");
        }

        const data = await response.json();

        let verseReference = data.verse.details.reference;
        let verseText = data.verse.details.text;
        console.log(`${verseReference} - ${verseText}\n`);
    } catch (error) {
        console.log(error.message);``
    }
}