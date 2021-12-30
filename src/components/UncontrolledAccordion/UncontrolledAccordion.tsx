//imports
import React from "react";
import s from './UncontrolledAccordion.module.css'
import {Story} from "@storybook/react";

//types
export type UncontrolledAccordionPropsType = {
    title: string
    setAccordionCollapsed: (accordionCollapsed: boolean) => void
    accordionCollapsed: boolean
}

// storybook


// components
export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    const clickCollapsed = () => {
        props.setAccordionCollapsed(!props.accordionCollapsed)
    }

    return (
        <div className={s.accordion}>
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
