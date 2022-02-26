// imports
import React, {useState} from "react";
import s from './Select.module.css'

// types
export type selectItemType = {
    id: string
    title: string
}
export type SelectPropsType = {
    selectItems: Array<selectItemType>
}

//components
export const Select = function ({selectItems, ...props}: SelectPropsType) {

    //functional
    const [stateSelectMenu, setStateSelectMenu] = useState(false);
    const [titleSelect, setTitleSelect] = useState('Select');
    const changeTitleSelectMenu = (title: string) => {
        setTitleSelect(title)
    }
    const openSelectMenu = () => setStateSelectMenu(!stateSelectMenu)

    //return
    return (
        <div className={!stateSelectMenu ? s.selectBoxClose : s.selectBoxOpen}
             onClick={() => openSelectMenu()}>
            <div className={s.titleSelect}>{titleSelect}</div>
            <div className={stateSelectMenu ? `${s.openSelectItems} animate__animated animate__fadeInUp` : s.closeSelectItems}>
                {selectItems.map((i) => {
                    return (
                        <div className={i.title === titleSelect ? s.itemSelectActive : s.itemSelect }
                             key={i.id}
                             onClick={() => changeTitleSelectMenu(i.title)}>
                            {i.title}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
