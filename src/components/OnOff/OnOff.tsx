// imports
import React from "react";


// types
type PropsType = {
    on: boolean
}



// components
export function OnOff (props: PropsType) {

// styles
    const onStyle = {}
    const offStyle = {}
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid black',

    }

    return (
        <div>
            <div>on</div>
            <div>off</div>
            <div style={indicatorStyle}>light</div>
        </div>
    )
}