import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => (
  <div className="site__header section__padding" id="home">
    <div className="site__header-content">
      <h1 className="gradient__text">Let's Unleash Our Creativity and Achieve Greatness Together</h1>
      <p>Though obstacles may arise during our journey, let's find joy in every twist and turn. Over the years, we've learned to embrace change and welcome the unexpected challenges that come our way</p>

      <div className="site__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="site__header-content__people">
        <img src={people} alt='people' />
        <p>+1,600 people </p>
      </div>
    </div>

    <div className="site__header-image">
      <img src={ai} alt='ai' />
    </div>
  </div>
);

export default Header;