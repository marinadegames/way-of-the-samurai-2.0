import React, {useState} from 'react';
import s from './App.module.css';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import { UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {ColorButtons} from "./components/ColorButtons/ColorButtons";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(2)
    let [accordionCollapsed, setAccordionCollapsed] = useState(false)
    let [switchOn, setSwitchOn] = useState(false)


    return (
        <div className={s.App}>

            <div className={s.Header}>
                <h3>Header</h3>
                <UncontrolledAccordion accordionCollapsed={accordionCollapsed}
                                       setAccordionCollapsed={setAccordionCollapsed}
                                       title={'MENU'}/>
            </div>

            <div className={s.Main}>
                <h3>MAIN</h3>
                <hr/>
                <Rating value={ratingValue} onClick={setRatingValue}/>
                <OnOff on={switchOn} onChange={(on) => setSwitchOn(on)}/>
                <ColorButtons/>
            </div>

            <div className={s.Footer}>
                <h3>Footer</h3>
            </div>

        </div>
    );
}

export default App;
