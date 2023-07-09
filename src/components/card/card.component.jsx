import React from 'react';
import './card.style.css';

// Functional component that represents a card
export const Card = props => (
  <div className='card-container'>
    {/* Rendering an image with a dynamic source based on the monster's ID */}
    <img
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      alt="monster"
    />
    {/* Displaying the monster's name */}
    <h2>{props.monster.name}</h2>
    {/* Displaying the monster's email */}
    <p>{props.monster.email}</p>
  </div>
);

   
    


