import { gql } from '@apollo/client';

const GET_TOPICS = gql` query($topic: String!) {    
    topic (name: $topic){
      name
      stargazerCount
      relatedTopics (first: 10) {
        id
        name
        stargazerCount
      }
    }
}`;

export default GET_TOPICS;