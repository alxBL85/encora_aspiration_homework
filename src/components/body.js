import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ErrorDialog from './ErrorDialog/index';
import {DebounceInput} from 'react-debounce-input';

import {
  getError, // Selector
  getRelatedTopics, // Selector
  getStargazerCount, // Action
  getTopic, // Selector
  isLoading, 
  requestTopicsThunk
} from '../slice/githubSlice';

import { LinearProgress } from '@material-ui/core';
import '../styles/body.css';
import RelatedTopics from './RelatedTopics';

const Body = () => {

  const dispatch = useDispatch();

  // ------------ SELECTORS ---------------------------
  
  const topic = useSelector(getTopic);
  const stargazerCount = useSelector(getStargazerCount);
  const relatedTopics = useSelector(getRelatedTopics);
  const loading = useSelector(isLoading);
  const error = useSelector(getError);
  
  // ------------ LOCAL STATE -------------------------
  
  const [localTopic, setLocalTopic] = useState('react');
  const [showErrorDialog, setShowErrorDialog] = useState(false);

  // ------------ EFFECTS -----------------------------

  useEffect(()=>{
   dispatch(requestTopicsThunk(localTopic));
  }, [localTopic]);

  useEffect(()=>{
    setShowErrorDialog(error !== '');
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

 return (<div className='bodyContainer'>    
    
    <ErrorDialog isOpen={showErrorDialog} message={error} handleClose = {handleCloseErrorDialog} />

    <form className="inputSearch" noValidate autoComplete="off" onSubmit={handleSubmit} style={{backgroundColor: 'lightsalmon'}}>  
    <span className="inputLabel">Search Topics with Redux Thunks and GraphQL</span>
    <DebounceInput 
      className="inputTextField"
      minLength={2} 
      debounceTimeout={300} 
      onChange={handleInputChange} 
      value={localTopic} 
      label="Search Topics"
    />     

      {loading && <LinearProgress /> }
    </form>

    {!loading && <RelatedTopics 
    onClickTopicHandler={onClickTopicHandler} 
    topic={topic} 
    stargazerCount={stargazerCount} 
    relatedTopics={relatedTopics} />
    }
  </div>
 );   
}

export default React.memo(Body);