import React, {useState, useEffect} from 'react';
import './App.css';
import About from './components/About/About.js';
import Cover from './components/Cover/Cover.js';
import Footer from './components/Footer/Footer.js';
import Navbar from './components/Navbar/Navbar.js';
import Slider from './components/Slider/Slider.js';


function App() {

const [scrollHeight, setScrollHeight] = useState(0);

const handleScroll = () => {
  const position = window.pageYOffset
  setScrollHeight(position)
};

useEffect(()=>{
  window.addEventListener('scroll', handleScroll);
}, [scrollHeight])

  return (
    <div className="App">
        <Navbar isScrolling={scrollHeight} />
        <Cover />
        <About />
        <Slider />
        <Footer />
    </div>
  );
}

export default App;
