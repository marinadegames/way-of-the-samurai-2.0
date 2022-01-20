//imports
import React, {useReducer} from "react";
import s from './UncontrolledAccordion.module.css'
import {ItemsMenuType} from "../../App";

//types
export type UncontrolledAccordionPropsType = {
    title: string
    // setAccordionCollapsed: (dispatch: boolean) => void
    // accordionCollapsed: boolean
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
type actionType = {
    type: string
}

const TOGGLE_CONST = 'TOGGLE-COLLAPSED'

const reducer = (state: boolean, action: actionType) => {
    /// logic
    switch (action.type) {
        case TOGGLE_CONST:
            return !state
        default:
            return state
    }
}


// components
export function UncontrolledAccordion(
    {
        title,
        // accordionCollapsed,
        // setAccordionCollapsed,
        itemsMenu,
        ...props
    }: UncontrolledAccordionPropsType) {

    let [accordionCollapsed, dispatch] = useReducer(reducer, false)


    return (
        <div className={s.accordion}>
            <AccordionTitle title={title}
                            onClick={() => dispatch({type: 'TOGGLE-COLLAPSED'})}/>
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
