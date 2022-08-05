import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ErrorDialog from './ErrorDialog/index';
import {DebounceInput} from 'react-debounce-input';

import {
  getError, // Selector
  getRelatedTopics, // Selector
  getStargazerCount, // Action
  getTopic, // Selector
  isLoading, requestTopicsThunk
} from '../slice/githubSlice';

import { LinearProgress } from '@material-ui/core';
import '../styles/body.css';

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

    <form className="inputSearch" noValidate autoComplete="off" onSubmit={handleSubmit}>  
    <span className="inputLabel">Search Topics</span>
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
  </div>
 );   
}

export default React.memo(Body);