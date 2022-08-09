import React from 'react';
import '../styles/footer.css';

const Footer = () => {

 return (<div className='footerContainer'>

    <b>Developer</b>: Bacilio Alexander Bolaños Lima <br/>
    <b>Personal Email:</b> alexander.bl85@gmail.com <br/>
    <b>Encora Email:</b> bacilio.bolanos@encora.com <br/>
    <b>Date:</b> 08/04/2022 <br/>
    <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/alexander-bolanos-3751024a/">https://www.linkedin.com/in/alexander-bolanos-3751024a/</a><br/>
    <b>GitHub:</b> <a href="https://github.com/alxBL85">https://github.com/alxBL85</a> <br/>
    <b>Version:</b> 1.0.2

    </div>
 );   
}

export default React.memo(Footer);