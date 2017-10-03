import React from 'react';
import './css/normalize.css';
import './css/carousel.css';
import './css/graf.css';
import './css/menu.css';
import './App.css';

import Navigace from './Navigace';
import Carousel from './Carousel';
import Slogan from './Slogan';
import MainText from './MainText';
import Graf from './Graf';


import SubText from './SubText';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <div className="content">
      <Navigace />
      <Carousel />
        <main>
          <Slogan />  
            <div className="article">
              <MainText />
              <Graf />
              <SubText />
            </div>
        </main>
      <Footer />
      </div>
    </div>
  );
};

export default App;