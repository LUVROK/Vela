import './App.css';
import './mediaCSS.css';
import './dropdown.css';
import image_right1 from './image/9ZJhvzxn_1.png';
import image_right2 from './image/9ZJhvzxn_2.png';
import image_left from './image/9ZJhvzxn_3.png';
import ImageScroll from './image/scroll.png';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'
import NAV from './components/nav';
import $ from 'jquery';

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    let s1 = document.getElementById("second");
    let s2 = document.getElementById("Third");
    let s3 = document.getElementById("Fourth");
    let s4 = document.getElementById("Fifth");
    let s5 = document.getElementById("Sixth");
    let positionSecond = s1.getBoundingClientRect();
    let positionThird = s2.getBoundingClientRect();
    let positionFourth = s3.getBoundingClientRect();
    let positionFifth = s4.getBoundingClientRect();
    let positionSixth = s5.getBoundingClientRect();
    // console.log(positionThird.top)
    console.log(positionSecond.top)
    console.log(positionThird.top)
    console.log(positionFourth.top)
    console.log(positionFifth.top)
    console.log(positionSixth.top)
    window.addEventListener('scroll', function () {
      let hash = $(document).scrollTop();

      if (hash <= positionSecond.top - 100) {
        setActiveSection('second')
      }
      else if (hash >= positionSecond.top - 100 && hash < positionThird.top) {
        setActiveSection('Third')
      }
      else if (hash >= positionThird.top - 100 && hash < positionFourth.top) {
        setActiveSection('Fourth')
      }
      else if (hash >= positionFourth.top - 100 && hash < positionFifth.top) {
        setActiveSection('Fifth')
      }
      else if (hash >= positionFifth.top - 100 && hash < positionSixth.top) {
        setActiveSection('Sixth')
      }
      else if (hash >= positionSixth.top) 
      {
        setActiveSection('Sixth')
      }

      console.log(hash)
      
    })
  }, []);

  const ScrollToBottom = () => {
    console.log(activeSection)
  }

  return (
    <div className="App" onWheel={ScrollToBottom}>
      <NAV />
      <div className='gallery_images'>
        <div className='image_right_1'>
          <img src={image_left} alt='image_right_1' />
        </div>
        <div className='image_right_r'>
          <img src={image_right1} alt='image_right_r1' className='image_right_r1' />
          <img src={image_right2} alt='image_right_r2' className='image_right_r2' />
        </div>
      </div>

      <div className="BackgroundSection">
        {/* <img src={BackgroundImage} alt="BackgroundSection" /> */}
      </div>

      <div className='ScrollIcon' onClick={ScrollToBottom}>
        <Link activeClass="active" to="second" spy={true} smooth={true}>
          <img src={ImageScroll} alt='ImageScroll' className='ImageScroll' />
        </Link>
      </div>

      <div className='secondSection' id="second">
        <div>VELA is just a space. And a space is just a place.</div>
      </div>

      <div className='ScrollIcon fixedIcon'>
        <Link activeClass="active" to={activeSection} spy={true} smooth={true}>
          <img src={ImageScroll} alt='ImageScroll' className='ImageScroll' />
        </Link>
      </div>

      <div className='thirdSection' id="Third">
        <div>But the right place is a space where just about anything can happen.</div>
      </div>

      <div className='thirdSection' id="Fourth">
        <div className='FourthText'>
          To be the place where people choose to spend their time-explore
          interests, meet others, engage with different points of view- is the
          finest compliment. That's why we made this space, devoid of
          expectations, just made to be enjoyed.
        </div>
      </div>

      <div className='thirdSection' id="Fifth">
        <div className='FourthText'>
          This place is a promise to expect the unexpected and get
          excited about being delighted. With space to gather and grow.
          And while VELA is just a space. It's unlike any other place we know.
        </div>
      </div>

      <div className='thirdSection' id="Sixth">
        <div className='FourthText'>
          Just as we intended.
        </div>
      </div>


      <footer className='footer'>

      </footer>
    </div>
  );
}

export default App;