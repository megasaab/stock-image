const BASE_URL = 'https://api.unsplash.com';
const API_KEY = 'OROFbf4GoJyPteai0xnmVMAskflddpuJ-4iXccAWijY';
import axios from 'axios';

export default async function getPhotos(page = 1) {
  let response;
  try {
    response =  await axios.get(`${BASE_URL}/photos?page=${page}&client_id=${API_KEY}`);
    if (response.data) {
      return response.data;
    }
  } catch (err) {
    console.log(err)
  }
}
