import React from 'react';
import red from '../assets/images/RED/C_S02.png';
import blue from '../assets/images/BLUE/S_E01.png';
import green from '../assets/images/GREEN/B_F03.png';
import { Link } from 'react-router-dom';


const Instructions = () => {
    return <div>
        <h1>How to play</h1>
        <div className='cards-grid-page'>
            <h3>
                The cards vary in four features: number (one, two, or three); symbol (crane, bird, squirrel); shading (solid, striped, or open); and color (red, green, or blue).
            </h3>
            <h3>A set consists of three cards satisfying all of these conditions:</h3>
            <ul>
                <li>They all have the same number or have three different numbers.</li>
                <li>They all have the same symbol or have three different symbols.</li>
                <li>They all have the same shading or have three different shadings.</li>
                <li>They all have the same color or have three different colors.</li>
            </ul>
            <h3>
                The rules of Set are summarized by: If you can sort a group of three cards into "two of ____ and one of ____", then it is not a set.
            </h3>
            <h3>Example:</h3>
            <div className='home-page-cards'>
                <img src={red} alt='C_S02'/>
                <img src={green} alt='S_E01'/>
                <img src={blue} alt='C_E02'/>
            </div>
            <h3 className='game-description'>These cards each have a unique number, symbol, shading, and color, and are thus a "set".</h3>
            <div className='home-buttons'>
                <Link to={'/play'}>Start the game</Link>
            </div>
        </div>
    </div>;
};

export default Instructions