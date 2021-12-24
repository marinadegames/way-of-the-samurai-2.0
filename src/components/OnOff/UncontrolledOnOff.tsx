// imports
import React, {useState} from "react";


// types
type PropsType = {
    //on: boolean
}



// components
export function UncontrolledOnOff (props: PropsType) {


    let [on, setOne] = useState(false)

// styles
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '0 0.5rem 0.5rem 0',
        padding: '0.3rem',
        cursor: 'pointer',
        backgroundColor: on ? 'var(--green)' : 'var(--light)'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '0 0.5rem 0.5rem 0',
        padding: '0.3rem',
        cursor: 'pointer',
        backgroundColor: on ? 'var(--light)' : 'var(--red)'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '0 0.5rem 0.5rem 0',
        backgroundColor: on ? 'var(--green)' : 'var(--red)'
    }

    return (
        <div>
            <div onClick={ () => { setOne(true) } } style={onStyle}>on</div>
            <div onClick={ () => { setOne(false) } } style={offStyle}>off</div>
            <div onClick={ () => {} } style={indicatorStyle}/>
        </div>
    )
}