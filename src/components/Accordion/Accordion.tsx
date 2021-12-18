//imports
import React from "react";

//type
type AccordionPropsTitle = {
    title: string


}
type AccordionPropsCollapsed = {
    collapsed?: boolean,
}

function Accordion(props: AccordionPropsTitle & AccordionPropsCollapsed){
    return(
        <div className='Accordion'>
            <AccordionTitle title={props.title}/>
            { !props.collapsed && <AccordionBody/> }
        </div>
    )
}
function AccordionTitle(props: AccordionPropsTitle){
    return <h3>{props.title}</h3>
}

function AccordionBody(props:any){

    if (props.collapsed === true){
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    }else{
        return <button>show....</button>
    }


}

export default Accordion;