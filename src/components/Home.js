import React from 'react';
import red from '../assets/images/RED/C_S02.png';
import blue from '../assets/images/BLUE/S_E01.png';
import green from '../assets/images/GREEN/B_F03.png';
import { Link } from 'react-router-dom';


const Home = () => {
    return <div>
        <h1>Origami set game</h1>
        <div className='cards-grid-page'>
            <div className='home-page-cards'>
                <img src={red} alt='C_S02'/>
                <img src={green} alt='S_E01'/>
                <img src={blue} alt='C_E02'/>
            </div>
            <h2 className='game-description'>This is an origami-inspired version of the set game, designed by Marsha Falco in 1974. <br/>
                Find all seven sets as fast as you can!</h2>
            <div className='home-buttons'>
                <Link to={'/play'}>Start the game</Link>
                <Link to={'/instructions'}>How to play</Link>
            </div>
        </div>
    </div>;
};

export default Home;