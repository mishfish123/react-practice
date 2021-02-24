import React, { useState } from 'react';
import styles from './card.css';
function Card(props) {
  return (
    <div className='card'>
    <img src={props.avatar} alt="Avatar"></img>
    <div className='container'>
    <h4><b>{props.name}</b></h4>
    <p>{props.location}</p>
    <p>{props.foodType}</p>
    <p>{props.age}</p>
    <p>{props.likes}</p>
    <a href={'https://www.twitter.com/'+props.twitter}>@{props.twitter}</a>
    </div>
    </div>
  );
}

export default Card;
