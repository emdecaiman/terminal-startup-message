# Terminal Startup Message

A simple CLI script written in plain JavaScript that displays a custom message when you open your terminal. 
It fetches your location using IP Geolocation API, and uses that to determine the
current weather using the OpenWeather API. It also retrieves a Bible verse of the day from the OurManna API.

## Features
- Displays a **welcome message** with the current date and time.
- Shows the **current weather** based on your geolocation.
- Displays the **verse of the day** using the OurManna API.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- An API key from [OpenWeather](https://openweathermap.org/api)
- An API key from [IPinfo](https://ipinfo.io/)

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/Terminal-Startup-Message.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd Terminal-Startup-Message
    ```

3. **Install the dependencies**:
    ```bash
    npm install
    ```

4. **Set up your environment variables**:
    Create a `.env` file in the root of your project and add your API keys.
    ```bash
    OPENWEATHER_API_KEY=your_openweather_api_key
    IPINFO_API_KEY=your_ipinfo_api_key
    VERSE_URL="https://beta.ourmanna.com/api/v1/get?format=json&order=random"
    ```

## Usage

To make this script run every time you open your terminal:

1. **Modify your terminal's startup file**:
    - For `Zsh`: Edit your `.zshrc` file:
      ```bash
      nano ~/.zshrc
      ```
    - For `Bash`: Edit your `.bashrc` file:
      ```bash
      nano ~/.bashrc
      ```

2. Add the following line at the end of the file to run the script:
    ```bash
    node /path/to/your/terminal-startup-message/index.js
    ```

3. Save and exit the file, then restart your terminal.

Now, every time you open your terminal, you'll see a welcome message with the current date, weather, and a Bible verse of the day.

## APIs Used

1. **IP Geolocation API (IPinfo)**: Fetches your current location based on your IP address. (https://ipinfo.io/products/ip-geolocation-api)
2. **OpenWeather API**: Retrieves the current weather for your location. (https://openweathermap.org/)
3. **OurManna Verse of the Day API**: Provides a daily Bible verse. (https://ourmanna.readme.io/reference/get-verse-of-the-day)

## Example Output
```
Thu, 2024-09-05 8:05:43 a.m.

Good Morning, in Burnaby, the weather is currently clear sky with a temperature of 17.23°C.
Humidity is at 86% and the wind speed is 0.5 m/s.

Revelation 21:4 - He will wipe every tear from their eyes. There will be no more death or mourning
or crying or pain, for the old order of things has passed away.
```
