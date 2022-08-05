import React  from 'react';
import Box from '@material-ui/core/Box';

import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';

import './styles/App.css';


const App = () => {

  // ------------ RENDER ------------------------------
  return (

    <Box component="span" m={1} className="appContainer">
    <Header/>
         <Body />
    <Footer/>
    </Box>
    
  );
}

export default App;
