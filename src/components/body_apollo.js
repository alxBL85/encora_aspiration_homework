import React, { useEffect, useState } from 'react';
import ErrorDialog from './ErrorDialog/index';
import {DebounceInput} from 'react-debounce-input';
import { useQuery } from '@apollo/client';
import GET_TOPICS from '../graphql/queries/topics';
import RelatedTopics from './RelatedTopics';

import { LinearProgress } from '@material-ui/core';
import '../styles/body.css';

const Body = () => {

 
  // ------------ LOCAL STATE -------------------------
  
  const [localTopic, setLocalTopic] = useState('react');
  const [showErrorDialog, setShowErrorDialog] = useState(false);

  // ------------ GRAPHQL QUERIES ---------------------

  const apolloQuery = useQuery(GET_TOPICS, {variables: {topic: localTopic}});

  const { loading, error } = apolloQuery;
  

  // ------------ EFFECTS -----------------------------

  useEffect(()=>{
    if(error) {
    setShowErrorDialog(error !== '');
    }
  }, [error])
  
  // ------------ EVENT HANDLERS ----------------------
  const handleInputChange = (event) => {
   if(event?.preventDefault){
    event.preventDefault();
    const { value } = event.target;
    setLocalTopic(value);
   }
  }


  const handleSubmit = (event) => {
      event.preventDefault();
  };


  const handleCloseErrorDialog = () => {
    setShowErrorDialog(false);
  }


  const onClickTopicHandler = (rTopicName) => {
    setLocalTopic(rTopicName);
  }
  
// ---------------------  RENDER -------------------------------------------- 

 return ( 
    <div className='bodyContainer'>    
    
    <ErrorDialog isOpen={showErrorDialog} message={error} handleClose = {handleCloseErrorDialog} />

    <form className="inputSearch" noValidate autoComplete="off" onSubmit={handleSubmit} style={{backgroundColor:'lightyellow'}}>  
    <span className="inputLabel">Search Topics with Apollo and GraphQL</span>
    <DebounceInput 
      className="inputTextField"
      minLength={2} 
      debounceTimeout={500} 
      onChange={handleInputChange} 
      value={localTopic} 
      label="Search Topics"
    />     

      {loading && <LinearProgress /> }
    </form>


    {!loading && <RelatedTopics 
    onClickTopicHandler={onClickTopicHandler} 
    topic={apolloQuery.data.topic.name} 
    stargazerCount={apolloQuery.data.topic.stargazerCount}
    relatedTopics = {apolloQuery.data.topic.relatedTopics}
    />}
  </div>
 );   
}

export default React.memo(Body);