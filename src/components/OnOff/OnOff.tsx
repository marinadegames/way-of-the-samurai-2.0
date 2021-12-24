// imports
import React from "react";


// types
type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

// components
export function OnOff (props: PropsType) {

    //functions
    const onClicked = () => {
        props.onChange(true)
    }
    const offClicked = () => {
        props.onChange(false)
    }


// styles
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '0 0.5rem 0.5rem 0',
        padding: '0.3rem',
        cursor: 'pointer',
        backgroundColor: props.on ? 'var(--green)' : 'var(--light)'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '0 0.5rem 0.5rem 0',
        padding: '0.3rem',
        cursor: 'pointer',
        backgroundColor: props.on ? 'var(--light)' : 'var(--red)'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '0 0.5rem 0.5rem 0',
        backgroundColor: props.on ? 'var(--green)' : 'var(--red)'
    }

    return (
        <div>
            <div onClick={onClicked}
                 style={onStyle}>on</div>

            <div onClick={offClicked}
                 style={offStyle}>off</div>

            <div style={indicatorStyle}/>
        </div>
    )
}