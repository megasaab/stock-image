const BASE_URL = 'https://api.unsplash.com';
const API_KEY = 'OROFbf4GoJyPteai0xnmVMAskflddpuJ-4iXccAWijY';
import axios from 'axios';


class ApiRequest {
    async getPhotos(page = 1, searchQuery) {
        let response;
        try {
            if (searchQuery) {
                response = await axios.get(`${BASE_URL}/photos?query=${searchQuery}?page=${page}&client_id=${API_KEY}`);
            } else {
                response = await axios.get(`${BASE_URL}/photos?page=${page}&client_id=${API_KEY}`);
            }

            if (response.data) {
                return response.data;
            }
        } catch (err) {
            console.log(err)
        }
    }

    async getTopics() {
        let response;
        try {
            response = await axios.get(`${BASE_URL}/topics?per_page=30&client_id=${API_KEY}`);
            if (response.data) {
                return response.data;
            }
        } catch (err) {
            console.log(err)
        }
    }
    //TODO need to read documentation
    async likePhoto(id) {
        let response;
        try {
            response = await axios.post(`${BASE_URL}/photos/${id}/like`, {}, {
                headers: {
                    Authorization: `Client-ID ${API_KEY}`
                }
            });
            if (response.data) {
                console.log(response.data)
                return response.data;
            }
        } catch (err) {
            console.log(err)
        }
    }
}

export const apiRequest = new ApiRequest();


