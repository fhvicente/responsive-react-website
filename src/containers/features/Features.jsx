import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: "Empowering Change with Trust",
    text: "Believe in your ability to make a difference, just as John did. He wholeheartedly trusted his vision and worked tirelessly to improve his community. You can do the same."
  },
  {
    title: "Embrace Active Participation",
    text: "Take a leap like John and actively engage in opportunities that come your way. Your willingness to help others can be a powerful catalyst for positive change."
  },
  {
    title: "Communicate with Impact",
    text: "Unlock the potential of effective communication, like John. By addressing concerns with clarity and kindness, you can foster understanding and growth in your community."
  },
  {
    title: "Build a Better Tomorrow",
    text: "Follow John's example in nurturing personal and community growth. With dedication, you can play a vital role in shaping a brighter future for your county and beyond."
  },
];

const Features = () => (
  <div className="site__features section__padding" id="features">
    <div className="site__features-heading">
      <h1 className="gradient__text">Embrace the Present, Shape Your Future. Take a Leap Forward Today and Turn Your Dreams into Reality.</h1>
      <p>Get Started Right Now</p>
    </div>
    <div className="site__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;