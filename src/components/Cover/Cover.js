import React from 'react';
import './Cover.css';
import coverVideo from '../../media/coverVideo.mp4'

const Cover = () => {
  return (
            <div className='cover-container'>
                <video className='video' src={coverVideo} autoPlay loop muted />
                <h1>Mauricio Di Pietro</h1>
                <p>Desarrollador Web Fullstack | M E R N | P E R N |</p>
            </div>
  )
}

export default Cover