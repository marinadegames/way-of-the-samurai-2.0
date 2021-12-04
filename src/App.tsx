import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

function App(props:any) {
    return (
        <div className="App">
            <div className='Header'> Header </div>
            <div className='Main'> Main </div>
            <div className='Footer'> Footer </div>

            Rating 1:
            <Rating value={1}/>

            Rating 2:
            <Rating value={4}/>

            <ButtonRed />
            <ButtonYellow />
            <ButtonBlue />
            <ButtonGreen />

            <Accordion title={'MENU: '} collapsed={true}/>
            <Accordion title={'USERS: '} collapsed={false}/>

        </div>
    );
}

let ButtonRed = (props:any) => <button className='ButtonRed'> red <b>alert</b>  </button>
let ButtonYellow = (props:any) => <button className='ButtonYellow'> yellow <b>favorites</b>  </button>
let ButtonBlue = (props:any) => <button className='ButtonBlue'> blue <b>info</b> </button>
let ButtonGreen = (props:any) => <button className='ButtonGreen'> green <b>send</b> </button>



export default App;
