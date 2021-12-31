// imports
import React, {useState} from "react";
import s from './Input.module.css'

// types

// assets

//components
export const Input = function () {

    //functional
    const [valueInput, setValueInput] = useState('')
    const inputChangeHandler = (value: string) => {
        setValueInput(value)
    }

    //return
    return(
        <div className={s.inputBox}>
            <div className={s.titleInput}>Input</div>
            <input className={s.inputStyle}
                   value={valueInput}
                   onChange={ (e) => inputChangeHandler(e.currentTarget.value) }
            />
            {valueInput}
        </div>
    )
}
