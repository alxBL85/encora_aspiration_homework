import axios from 'axios';
import { baseUrl } from '../config';

export const getTopicsService = async (topic) => {

    const options = {
        headers: {
            "content-type": 'application/json',
            "Authorization": `bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`
            
        },
    };

    const requestBody = {
        
        "query": `query($topic: String!) {    
            topic (name: $topic){
              name
              stargazerCount
              relatedTopics (first: 10) {
                id
                name
                stargazerCount
              }
            }
        }`,
        "variables": {
            "topic": topic
        }
    }



    try {
        return await axios.post(baseUrl, requestBody,  options).then( res => res).catch(error => error);
    }
    catch (error) {
        return error;
    }
};

