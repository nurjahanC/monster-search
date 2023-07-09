import React from "react";
import { Card } from '../card/card.component';

import "./card-list.styles.css";

// Functional component that represents a list of cards
export const CardList = props => (
  <div className='card-list'>
     {/* Mapping over the monsters array and rendering a Card component for each monster  */}
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} /> // Rendering a Card component with a unique key and passing the monster as a prop
    ))}
  </div>
);


// export const CardList = props => (
//   <div className='card-list'>
//             { props.monsters.map(monster => (
//            <h1 key={monster.id} > {monster.name} </h1>
//          ))}
//    </div>

//             );


