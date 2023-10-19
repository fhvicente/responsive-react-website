import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="site__blog section__padding" id="blog">
    <div className="site__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="site__blog-container">
      <div className="site__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 23, 2023" text="Believe in yourself, for you have the power to achieve greatness." />
      </div>
      <div className="site__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 25, 2023" text="Believe in yourself, for you have the power to achieve greatness." />
        <Article imgUrl={blog03} date="Sep 26, 2023" text="Believe in yourself, for you have the power to achieve greatness." />
        <Article imgUrl={blog04} date="Sep 27, 2023" text="Believe in yourself, for you have the power to achieve greatness." />
        <Article imgUrl={blog05} date="Sep 28, 2023" text="Believe in yourself, for you have the power to achieve greatness." />
      </div>
    </div>
  </div>
);

export default Blog;