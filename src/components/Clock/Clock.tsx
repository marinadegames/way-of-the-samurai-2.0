// imports
import React, {useEffect, useState} from "react";


// types
type PropsType = {}


// component
export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalID = setInterval(() => {
            setDate(new Date())
            console.log('TICK')
        }, 1000);

        return () => {
            clearInterval(intervalID)
        }
    })

    const getTwoDigitsString = (num: number) => num < 10 ? '0' + num : num
    const secondsString = getTwoDigitsString(date.getSeconds())
    const minutesString = getTwoDigitsString(date.getMinutes())
    const hoursString = getTwoDigitsString(date.getHours())

    return (
        <div>
            <span>{hoursString}</span>
            :
            <span>{minutesString}</span>
            :
            <span>{secondsString}</span>
        </div>
    )
}