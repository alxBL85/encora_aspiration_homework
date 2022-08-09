import React from "react";

const RelatedTopics = ({ loading, topic, stargazerCount, relatedTopics, onClickTopicHandler}) => {
  
    return (
      <div className='resultsContainer'>
        <div className="topic">{topic}</div>
        {!loading && <div className="stargazerCount">{stargazerCount}</div>}
        <hr/>
     
      <div className="relatedTopicsList">
        {relatedTopics && relatedTopics.map(rTopic => (<div key={rTopic.id} className="relatedTopicContainer" ><a className="relatedTopic" href="#" onClick={()=> onClickTopicHandler(rTopic.name)} > 
          <div className="relatedTopicName">{rTopic.name}</div>
          <div className="relatedTopicStargazerCount">{`(${rTopic.stargazerCount})`}</div>
          </a></div>)
        )}
      </div>
  
      </div> 
    );
   }

   export default RelatedTopics;