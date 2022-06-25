import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
            <div className='footer' >
                <div className='footer-info'>
                    {/* <h1>José Mauricio Di Pietro</h1> */}
                    <p>Si te interesa mi perfil..</p>
                </div>
                <div className='footer-contact'>
                    <h3>Contactame!</h3>
                    <p></p>
                </div>
                <div className='footer-sns'>
                    <div className='cv'>
                        <h3>Mi Currículum Vitae</h3>
                        <a href="https://drive.google.com/file/d/1BAJgeWuUUOsXsI4RzsbSDriAlPbBoNh2/view?usp=sharing" target='_blank' rel="noreferrer" download="CV_Di Pietro.pdf">
                        <i className="fa fa-download" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className='sns-links'>
                        <a href='mailto:dipietro.jm@gmail.com' target='_blank' rel="noreferrer">
                            <i class="fa-solid fa-envelope"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/jm-di-pietro/' target='_blank' rel="noreferrer">
                            <i className='fab fa-linkedin linkedin'></i>
                        </a>
                        <a href='https://github.com/MauriDiPietro' target='_blank' rel="noreferrer">
                            <i className='fab fa-github github'></i>
                        </a>
                        <a href='https://twitter.com/JMauriDiPietro' target='_blank' rel="noreferrer">
                            <i className='fab fa-twitter twitter'></i>
                        </a>
                    </div>
                </div>
            </div>
  )
}

export default Footer