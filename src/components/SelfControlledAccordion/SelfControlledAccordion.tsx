//imports
import React from "react";
import s from './SelfControlledAccordion.module.css'

//types
type UnContrAccordPropsType = {
    title: string
    setAccordionCollapsed: (accordionCollapsed: boolean) => void
    accordionCollapsed: boolean
}

// components
export function UncontrolledAccordion(props: UnContrAccordPropsType) {

    const clickCollapsed = () => {
        props.setAccordionCollapsed(!props.accordionCollapsed)
    }

    return (
        <div className='Accordion'>
            <AccordionTitle title={props.title}
                            onClick={clickCollapsed}/>
            <AccordionBody accordionCollapsed={props.accordionCollapsed}/>
        </div>
    )
}


function AccordionTitle(props: any) {

    const titleMenuClick = () => {
        props.onClick()
    }

    return (
        <h3 onClick={titleMenuClick}
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
