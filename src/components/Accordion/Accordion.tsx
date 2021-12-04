import React from "react";

function Accordion(props:any){
    return(
        <div className='Accordion'>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}
function AccordionTitle(props:any){
    return <h3>Меню:</h3>
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