import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './Button';
import Card from './Card';
import { popeye } from './data.js'


ReactDOM.render(
  <React.StrictMode>
    <h1>Task 1</h1>
    <Button />
    <h1>Task 2</h1>
    {popeye.map(popeye => <Card name={popeye.name} location={popeye.location} foodtype={popeye.foodType}
    age={popeye.age} likes={popeye.likes} twitter={popeye.twitterUsername} avatar={popeye.avatar}/>)}
  </React.StrictMode>,
  document.getElementById('root')
);
