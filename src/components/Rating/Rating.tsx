// imports
import React from "react";
import s from './Rating.module.css'

//assets
let starImg = <img src="https://img.icons8.com/ios/20/000000/star--v1.png" alt='png'/>

//type
export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}
type StarPropsType = {
    onClick: (value:RatingValueType) => void
    selected: boolean
    value: RatingValueType
}

// component
function Rating(props: RatingPropsType) {


    return (
        <div className={s.Rating}>
            <p className={s.ratingTitle}>Rating:</p>
            <Star selected={props.value > 0}  onClick={ props.onClick } value={1}/>
            <Star selected={props.value > 1}  onClick={ props.onClick } value={2}/>
            <Star selected={props.value > 2}  onClick={ props.onClick } value={3}/>
            <Star selected={props.value > 3}  onClick={ props.onClick } value={4}/>
            <Star selected={props.value > 4}  onClick={ props.onClick } value={5}/>
        </div>
    )
}

function Star(props: StarPropsType) {
    return <button className={!props.selected ? s.ButtonStar : s.ButtonStarCheck}
                   onClick={() => { props.onClick(props.value) }}> {starImg} </button>
}

export default Rating;