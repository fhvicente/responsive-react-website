import React from 'react';
import Feature from '../../components/feature/Feature';
import './what.css';

const What = () => (
  <div className="site__what section__margin" id="wgpt3">
    <div className="site__what-feature">
      <Feature title="What is this project" text="We cherish the opinions of our friends, finding delight in their messages. We should always be open to new experiences and perspectives. Even if our own convictions are not easily swayed, we should be open to forming connections and engaging with the diverse views of our fellow human beings. In doing so, we can foster friendly and harmonious relationships, opening the door to new opportunities." />
    </div>
    <div className="site__what-heading">
      <h1 className="gradient__text">Let your imagination soar, for the possibilities are boundless.</h1>
      <p>Explore the Library</p>
    </div>
    <div className="site__what-container">
      <Feature title="Community" text="Our community thrives on the exchange of ideas and the joy of connecting with friends who share their opinions. The conversations that unfold within our community are like a rich tapestry, where every voice adds a unique thread to the fabric of our shared experiences. It's through these interactions that we come to realize the boundless potential that lies before us." />
      <Feature title="Knowledge" text="In our collective knowledge, we find a fusion of wisdom and compassion. Together, we insist on the importance of understanding the human experience. We welcome newcomers with open arms, just as a friendly bachelor extends a warm invitation. Our knowledge, like a well-furnished apartment, may seem impossible to fully explore, but it provides a comfortable and welcoming space for all." />
      <Feature title="Education" text="In our collective knowledge, we find a fusion of wisdom and compassion. Together, we insist on the importance of understanding the human experience. We welcome newcomers with open arms, just as a friendly bachelor extends a warm invitation. Our knowledge, like a well-furnished apartment, may seem impossible to fully explore, but it provides a comfortable and welcoming space for all." />
    </div>
  </div>
);

export default What;