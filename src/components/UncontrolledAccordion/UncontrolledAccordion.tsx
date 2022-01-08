//imports
import React from "react";
import s from './UncontrolledAccordion.module.css'
import {Story} from "@storybook/react";
import {ItemsMenuType} from "../../App";

//types
export type UncontrolledAccordionPropsType = {
    title: string
    setAccordionCollapsed: (accordionCollapsed: boolean) => void
    accordionCollapsed: boolean
    itemsMenu: Array<ItemsMenuType>,
}
type AccordionTitlePropsType = {
    title: string,
    onClick: () => void,
}
type AccordionBodyPropsType = {
    itemsMenu: Array<ItemsMenuType>,
    accordionCollapsed: boolean,
}


// components
export function UncontrolledAccordion(
    {
        title,
        accordionCollapsed,
        setAccordionCollapsed,
        itemsMenu,
        ...props
    }: UncontrolledAccordionPropsType) {

    const clickCollapsed = () => {
        setAccordionCollapsed(!accordionCollapsed)
    }

    return (
        <div className={s.accordion}>
            <AccordionTitle title={title}
                            onClick={clickCollapsed}/>
            <AccordionBody accordionCollapsed={accordionCollapsed}
                           itemsMenu={itemsMenu}/>
        </div>
    )
}


function AccordionTitle({title, onClick, ...props}: AccordionTitlePropsType) {

    const titleMenuClick = () => {
        onClick()
    }

    return (
        <h3 onClick={titleMenuClick}
            className={s.accordionTitle}>{title}</h3>
    )
}

function AccordionBody(props: AccordionBodyPropsType) {

    if (props.accordionCollapsed) {
        return (
            <div className={s.menu}>
                {props.itemsMenu.map((i: ItemsMenuType) => {
                    return (
                        <li key={i.id}>
                            {i.title}
                        </li>
                    )
                })}
            </div>
        )
    } else {
        return <div/>
    }


}
