import React from 'react';
import './App.css';


let starImg = <img src="https://img.icons8.com/ios/30/000000/star--v1.png"/>

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

let ButtonRed = () => <button className='ButtonRed'> red <b>alert</b>  </button>
let ButtonYellow = () => <button className='ButtonYellow'> yellow <b>favorites</b>  </button>
let ButtonBlue = () => <button className='ButtonBlue'> blue <b>info</b> </button>
let ButtonGreen = () => <button className='ButtonGreen'> green <b>send</b> </button>
let ButtonStar = () => <button className='ButtonStar'> {starImg} </button>

function Rating() {
    return (
        <div className='Rating'>
            <h3>Rating:</h3>
            <ButtonStar />
            <ButtonStar />
            <ButtonStar />
            <ButtonStar />
            <ButtonStar />
        </div>
    )
}


export default App;
