// imports
import React from "react";
import s from './ColorButtons.module.css'

//types

//assets

//components

export const ColorButtons = function (props:any){

    return (
        <div>
            <div className={s.titleColorButtons}>Color buttons</div>
            <ButtonRed/>
            <ButtonYellow/>
            <ButtonBlue/>
            <ButtonGreen/>

        </div>
    )
}


let ButtonRed = (props: any) => <button className={s.ButtonRed}> red <b>alert</b></button>
let ButtonYellow = (props: any) => <button className={s.ButtonYellow}> yellow <b>favorites</b></button>
let ButtonBlue = (props: any) => <button className={s.ButtonBlue}> blue <b>info</b></button>
let ButtonGreen = (props: any) => <button className={s.ButtonGreen}> green <b>send</b></button>
