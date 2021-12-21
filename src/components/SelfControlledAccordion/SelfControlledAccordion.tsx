//imports
import React, {useState} from "react";
import s from './SelfControlledAccordion.module.css'

//type
type AccordionPropsTitle = {
    title: string

}

type AccordionPropsCollapsed = {
    collapsed?: boolean
}
type AccrodionTitlePropsType = {
    title: string
    onClick: () => void
}
type AccordionBodyTypeProps = {
    collapsed?: boolean
}

export function SelfControlledAccordion(props: AccordionPropsTitle & AccordionPropsCollapsed){

    let [collapsed, setCollapsed] = useState(false)


    // styles

    return(
        <div className='Accordion'>
            <AccordionTitle title={props.title}
                            onClick={ () => setCollapsed(!collapsed) }/>
            <AccordionBody collapsed={collapsed} />
        </div>
    )
}

function AccordionTitle (props: AccrodionTitlePropsType){
    return (
        <h3 onClick={ () => props.onClick() } className={s.accordionTitle} >{props.title}</h3>
    )
}

function AccordionBody(props:AccordionBodyTypeProps){

    if (props.collapsed === true){
        return (
            <div className={s.menu}>
                <li>HTML & CSS</li>
                <li>JS</li>
                <li>React</li>
            </div>
        )
    }else{
        return <div/>
    }


}
