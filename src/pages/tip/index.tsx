import React from 'react';

import './styles.css'
import Header from '../header';

function Tip(){
	return (
		<div className='container'>
			<Header/>

			<div id='content' className='content'>
				<div className='tip-container'>
					<div className="tip-header">
						<div className="profile-container"/>
					</div>

					<div className="tip-info-container">
						<form action='' id='tip-info' className='tip-info'>
							<input type='text' id='name' className='name' placeholder='Nome' required/>
							<input type='number' id='value' className='value' placeholder='Valor' required/>
							<div className="tip-message">
								<textarea id='message' className='message' placeholder='Mensagem' required/>
							</div>
							<input type='submit' id='send' className='send'/>
						</form>
					</div>
				</div>
			</div>
			
			<a className='help' href='/'>
				Ajude-nos a manter o propósito vivo
			</a>
		</div>
	);
}

export default Tip;