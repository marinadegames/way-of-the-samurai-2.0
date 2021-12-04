import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";


let starImg = <img src="https://img.icons8.com/ios/30/000000/star--v1.png" alt='png'/>

function App(props:any) {
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

            <Accordion/>

        </div>
    );
}

let ButtonRed = (props:any) => <button className='ButtonRed'> red <b>alert</b>  </button>
let ButtonYellow = (props:any) => <button className='ButtonYellow'> yellow <b>favorites</b>  </button>
let ButtonBlue = (props:any) => <button className='ButtonBlue'> blue <b>info</b> </button>
let ButtonGreen = (props:any) => <button className='ButtonGreen'> green <b>send</b> </button>
let Star = (props:any) => <button className='ButtonStar'> {starImg} </button>

function Rating(props:any) {
    return (
        <div className='Rating'>
            <h3>Rating:</h3>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    )
}



export default App;
