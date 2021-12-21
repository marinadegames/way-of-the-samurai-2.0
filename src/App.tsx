import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {SelfControlledAccordion} from "./components/SelfControlledAccordion/SelfControlledAccordion";

function App(props: any) {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(2)

    return (
        <div className="App">
            <div className='Header'> Header</div>
            {/*<div className='Main'> Main</div>*/}
            {/*<div className='Footer'> Footer</div>*/}

            <Rating value={ratingValue} onClick={setRatingValue}/>

            {/*<ButtonRed/>*/}
            {/*<ButtonYellow/>*/}
            {/*<ButtonBlue/>*/}
            {/*<ButtonGreen/>*/}

            {/*<Accordion title={'MENU: '} collapsed={true}/>*/}
            {/*<Accordion title={'USERS: '} collapsed={false}/>*/}

            {/* <hr/>*/}

            <OnOff/>
            <OnOff/>
            <OnOff/>

            <SelfControlledAccordion title={'MENU'}/>

        </div>
    );
}

let ButtonRed = (props: any) => <button className='ButtonRed'> red <b>alert</b></button>
let ButtonYellow = (props: any) => <button className='ButtonYellow'> yellow <b>favorites</b></button>
let ButtonBlue = (props: any) => <button className='ButtonBlue'> blue <b>info</b></button>
let ButtonGreen = (props: any) => <button className='ButtonGreen'> green <b>send</b></button>


export default App;
