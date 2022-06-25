import React from 'react';
import {Link} from 'react-router-dom'
// import videogames from '../../media/videogames.png';
// import depor3 from '../../media/depor3.png';
// import ecommerce from '../../media/ecommerce.png';
// import proyectoYoagronomo from '../../media/proyectoYoagronomo.png';
// import proyectoChat from '../../media/proyectoChat.png';

const slidesInfo = [
    {
        src: 'https://mauridipietro.github.io/portfolio/assets/images/depor3.png',
        alt: '',
        desc: 'Portal de noticias deportivas',
        url: 'http://depor3.com/'
    },
    {
        src: 'https://mauridipietro.github.io/portfolio/assets/images/proyecto-videogames3.png',
        alt: '',
        desc: 'App Videogames',
        url: 'https://github.com/MauriDiPietro/App-Videogames'
    },
    {
        src: 'https://mauridipietro.github.io/portfolio/assets/images/proyecto-agosto-2021.png',
        alt: '',
        desc: 'Ecommerce',
        url: 'https://github.com/MauriDiPietro/tienda-virtual'
    },
    {
        src: 'https://mauridipietro.github.io/portfolio/assets/images/proyecto-yoagronomo.png',
        alt: '',
        desc: 'Yo Agrónomo',
        url: 'https://github.com/julianactrl/yoAgronomoApp'
    },
    {
        src: 'https://mauridipietro.github.io/portfolio/assets/images/proyecto-chat.png',
        alt: '',
        desc: 'Chat con websockets',
        url: 'https://github.com/MauriDiPietro/chat-socket.io'
    },
    {
        src: 'https://i.ibb.co/q5x3V22/larueca.png',
        alt: '',
        desc: 'Sistema de ventas',
        url: 'https://github.com/MauriDiPietro/PoS-mongo/'
    },
    {
        src:  "https://i.ibb.co/2vbBf00/api-Disney.png",
        alt: '',
        desc: 'Api Disney',
        url: 'https://github.com/MauriDiPietro/api-disney'
    },
    {
        src:  "https://i.ibb.co/XkjYkbW/appTasks.png" ,
        alt: '',
        desc: 'App Tasks',
        url: 'https://github.com/MauriDiPietro/crud-fullstack'
    }

    
   
]

const slides = slidesInfo.map(slide=>(
    <div className='slide-container'>
        <a href={slide.url} target='_blank' rel="noreferrer">
            <img src={slide.src} alt={slide.alt}  height={500}/>
        </a>
        <div className='slide-desc'>
            <span> {slide.desc} </span>
        </div>
    </div>
));

export default slides;