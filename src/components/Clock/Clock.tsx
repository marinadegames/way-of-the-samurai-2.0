// imports
import React, {useEffect, useState} from "react";
import {DigitalClock} from "./DigitalClock";
import {AnalogClock} from "./AnalogClock";


// types
type PropsType = {
    mode: 'digital' | 'analog'
}


// component
export const Clock = (props: PropsType) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalID)
        }
    })


    // return
    return (
        <>
            {props.mode === 'digital'
                ?
                <DigitalClock date={date}/>
                :
                <AnalogClock date={date}/>
            }
        </>
    )


}