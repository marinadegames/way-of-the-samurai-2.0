import React from "react";

function Accordion(props:any){
    return(
        <div className='Accordion'>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    )
}
function AccordionTitle(props:any){
    return <h3>{props.title}</h3>
}

function AccordionBody(props:any){
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;