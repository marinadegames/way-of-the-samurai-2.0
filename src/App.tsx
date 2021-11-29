import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className='Header'> Header </div>
            <div className='Main'> Main </div>
            <div className='Footer'> Footer </div>

            <Rating />
            <ButtonRed />
            <ButtonYellow />
            <ButtonBlue />
            <ButtonGreen />
        </div>
    );
}

let ButtonRed = () => <button className='ButtonRed'> Button RED </button>
let ButtonYellow = () => <button className='ButtonYellow'> Button YELLOW </button>
let ButtonBlue = () => <button className='ButtonBlue'> Button BLUE </button>
let ButtonGreen = () => <button className='ButtonGreen'> Button GREEN </button>


function Rating() {
    return (
        <div className='Rating'>
            <div>STAR</div>
            <div>STAR</div>
            <div>STAR</div>
            <div>STAR</div>
            <div>STAR</div>
        </div>
    )
}

export default App;
