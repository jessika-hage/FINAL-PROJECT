// Citizen API
const BASE_URL = "https://citizen-ship.herokuapp.com";
export const CITIZEN_URL = (slug) => `${BASE_URL}/${slug}`;

// Description Cards
export const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=Albuquerque&appid=43ba64a4c8501d0a42ad450861b82e40`;
export const FORECAST_API = `https://api.openweathermap.org/data/2.5/forecast?q=Albuquerque,Sweden&APPID=43ba64a4c8501d0a42ad450861b82e40`;
