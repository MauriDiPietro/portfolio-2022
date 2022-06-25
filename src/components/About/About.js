import React from 'react';
import './About.css';
import perfil from '../../media/perfil.png';

const About = () => {
  return (
            <div className="about-container" >
                <div className="about-desc">
                    <h3>Sobre mí</h3>
                    <p>
                        Soy Desarrollador Web Fullstack con conocimientos
                        en Backend: Express, Node.js, Bases de datos en SQL, MySQL, PostgreSQL, Mongo; 
                        Frontend: HTML, CSS, React.js
                    </p>
                    {/* <i class="fa fa-database" aria-hidden="true"></i> */}
                </div>
                <div className="about-img" >
                    <img src={perfil} alt=''/>
                </div>
                
            </div>
  )
}

export default About