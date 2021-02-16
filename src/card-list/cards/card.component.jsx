import React from 'react';
import './card.styles.css';


export const card = props => (
    <div className='card-container'>
        <h1> {props.monster.name} </h1>
    </div>
);