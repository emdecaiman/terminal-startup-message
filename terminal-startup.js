const VERSE_URL = "https://beta.ourmanna.com/api/v1/get?format=json&order=daily";

// Promise method
// const displayVerseOfTheDay = () => {
//     fetch(VERSE_URL)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Error: Could not fetch verse of the day!");
//             }
//             return response.json();
//         })
//         .then(data => {
//             let verseReference = data.verse.details.reference;
//             let verseText = data.verse.details.text;
//             console.log(verseReference + " \"" + verseText + "\"");
//         })
//         .catch(error => console.log(error));
// }

// Async/Await method
const displayVerseOfTheDay = async () => {
    try {
        const response = await fetch(VERSE_URL);

        if (!response.ok) {
            throw new Error("Error: Could not fetch verse of the day!")
        }

        const data = await response.json();
        let verseReference = data.verse.details.reference;
        let verseText = data.verse.details.text;
        console.log(verseReference + " \"" + verseText + "\"");
    } catch {
        console.log(error);
    }
}

const runStartUp = () => {
    displayVerseOfTheDay();
}

runStartUp();

