import React from 'react';
import { Link } from 'react-router-dom';

//import Language from '../../assets/images/Language.svg'; 

import './styles.css'

function Footer() {
    return (
        <div className="footer-container">
            <Link to='/help' className='help'>Help</Link>
        </div>
    );
}

export default Footer;