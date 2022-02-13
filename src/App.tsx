import React, {useState} from 'react';
import s from './App.module.css';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {ColorButtons} from "./components/ColorButtons/ColorButtons";
import {Input} from "./components/Input/Input";
import {v1} from 'uuid';
import {Select} from "./components/Select/Select";

export type ItemsMenuType = {
    id: string,
    title: string
}

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(2)
    let [switchOn, setSwitchOn] = useState(false)
    // let [accordionCollapsed, setAccordionCollapsed] = useState(false)


    const [itemsMenu, setItemsMenu] = useState<Array<ItemsMenuType>>([
        {id: v1(), title: 'HTML&CSS'},
        {id: v1(), title: 'JavaScript'},
        {id: v1(), title: 'React'},
        {id: v1(), title: 'Redux'},
    ])

    const selectItems = [
        {id: v1(), title: 'HTML'},
        {id: v1(), title: 'CSS'},
        {id: v1(), title: 'JS'},
        {id: v1(), title: 'React'},
    ]

    return (
        <div className={s.App}>

            <div className={s.Header}>
                <h3>Header</h3>
                <UncontrolledAccordion
                    // accordionCollapsed={accordionCollapsed}
                    //                    setAccordionCollapsed={dispatch}
                    itemsMenu={itemsMenu}
                    title={'MENU'}/>
            </div>

            <div className={s.Main}>
                <h3>MAIN</h3>
                <hr/>
                <Rating value={ratingValue} onClick={setRatingValue}/>
                <OnOff on={switchOn} onChange={(on) => setSwitchOn(on)}/>
                <ColorButtons/>
                <Input/>
                <Select selectItems={selectItems}/>
            </div>

            <div className={s.Footer}>
                <h3>Footer</h3>
            </div>

        </div>
    );
}

export default App;
