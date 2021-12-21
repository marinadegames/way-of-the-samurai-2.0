//imports
import React from "react";
import s from './SelfControlledAccordion.module.css'

//types


// components
export function UncontrolledAccordion(props: any) {
    return (
        <div className='Accordion'>
            <AccordionTitle title={props.title}
                            onClick={() => props.setAccordionCollapsed(!props.accordionCollapsed)}/>
            <AccordionBody accordionCollapsed={props.accordionCollapsed}/>
        </div>
    )
}

function AccordionTitle(props: any) {
    return (
        <h3 onClick={() => props.onClick()}
            className={s.accordionTitle}>{props.title}</h3>
    )
}

function AccordionBody(props: any) {

    if (props.accordionCollapsed === true) {
        return (
            <div className={s.menu}>
                <li>HTML & CSS</li>
                <li>JS</li>
                <li>React</li>
            </div>
        )
    } else {
        return <div/>
    }


}
