import axios from 'axios';

export const cocktailsApi = axios.create({
  baseURL: 'https://the-cocktail-db.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_COCKTAIL_API_KEY,
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
  },
});
