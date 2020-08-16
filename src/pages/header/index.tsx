import React from 'react';

import { Link } from 'react-router-dom'

import Logo from '../../assets/images/Logo.svg';  
//import Language from '../../assets/images/Language.svg'; 


import './styles.css'

function Header() {
    return (
        <div id='header' className='header'>
            <div className='background'/>

            <div className='left-header'>
                <img src={Logo} alt='Logo'/>
                <h1>True Donate</h1>
            </div>

            <div className='right-header'>
                <div className="auth-choice">
                    <Link to='/login'>
                        Login
                    </Link>
                    <Link to='/register'>
                        Registre-se
                    </Link>
                </div>
                {/*<a href='/'>
                    <img src={Language} alt='language'/>
                </a>*/}
            </div>
        </div>
    );
}

export default Header;