import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="site__possibility section__padding" id="possibility">
    <div className="site__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="site__possibility-content">
      <h4>Just Start</h4>
      <h1 className="gradient__text">The limits is only in<br /> Your head</h1>
      <p>Even though the path may be challenging, let's seek the silver lining in every journey. 
        Blessings can be found in unexpected places, and joy can arise from embracing change and forming strong bonds. 
        Over the years, we've learned to welcome the opportunities that come our way</p>
      <h4>Right Now</h4>
    </div>
  </div>
);

export default Possibility;