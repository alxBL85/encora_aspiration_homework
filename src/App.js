import React, {useState}  from 'react';
import Box from '@material-ui/core/Box';
import { MenuItem, Select } from '@material-ui/core';
import Header from './components/header';
import Footer from './components/footer';
import  BodyApollo from './components/body_apollo';
import  BodyRedux from './components/body';



import './styles/App.css';


const App = () => {

  const [selectedClient, setSelectedClient] = useState('graphQL/Apollo');

 const handleChange = (event) => {
   event.preventDefault();
   setSelectedClient(event.target.value);
 }
 

  // ------------ RENDER ------------------------------
  return (

    <Box component="span" m={1} className="appContainer">
    <Header/>

    <div className="frameworkSelection">
         Select your client:
         <Select 
           labelId="framework-select-label"
           id="framework-select-id"
           value = {selectedClient}
           label = "Framework"
           onChange = {handleChange}
         >
            <MenuItem value="graphQL/Apollo" >Apollo</MenuItem>
            <MenuItem value="graphQL/Redux">Redux Thunk</MenuItem>
         </Select>
    </div>

    {
      selectedClient === "graphQL/Apollo" ? <BodyApollo/> : <BodyRedux />
    }
    
    
   
    <Footer/>
    </Box>
    
  );
}

export default App;
