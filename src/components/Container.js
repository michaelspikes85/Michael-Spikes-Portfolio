import React from 'react';
import '../styles/Container.css';

const Container = (props) => (
  <div className="Container container bg-dark mt-5 mb-5 p-5 rounded">
    {props.children}
  </div>
);

export default Container;
