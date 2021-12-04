//imports
import React from "react";

//type
type AccordionPropsTitle = {
    title: string,
}

function Accordion(props: AccordionPropsTitle){
    return(
        <div className='Accordion'>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    )
}
function AccordionTitle(props: AccordionPropsTitle){
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