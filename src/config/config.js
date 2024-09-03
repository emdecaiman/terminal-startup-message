import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// convert config.js module's URL into a file path
const __filename = fileURLToPath(import.meta.url);

// extract directory name from the full file path
const __dirname = dirname(__filename);

// resolve relative path to .env file from current module directory
// and load env variables
dotenv.config({ path: resolve(__dirname, '../../.env') });

export const VERSE_URL = process.env.VERSE_URL;
export const IP_API = process.env.IP_API;
export const WEATHER_API = process.env.WEATHER_API;
