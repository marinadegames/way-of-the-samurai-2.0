//imports
import React, {useState} from "react";
import s from './SelfControlledAccordion.module.css'

//type
type AccordionPropsTitle = {
    title: string
}
type AccordionPropsCollapsed = {
    collapsed?: boolean,
}

export function SelfControlledAccordion(props: AccordionPropsTitle & AccordionPropsCollapsed){

    let [collapsed, setCollapsed] = useState(false)


    // styles

    return(
        <div className='Accordion'>
            <h3 className={s.accordionTitle}>{props.title}</h3>
            <button className={s.btnShow} onClick={() => setCollapsed(!collapsed) }>show</button>
            <AccordionBody collapsed={collapsed}/>
        </div>
    )
}


function AccordionBody(props:any){

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
