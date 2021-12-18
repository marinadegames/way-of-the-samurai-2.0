// imports
import React from "react";

//assets
let starImg = <img src="https://img.icons8.com/ios/20/000000/star--v1.png" alt='png'/>

//type
type RatingProps = {
    value: number,
}
type StarPropsType = {
    selected: boolean,
}

function Rating(props: RatingProps) {

    return (
        <div className='Rating'>
            <h3>Rating:</h3>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )

}

function Star (props: StarPropsType){
    if (!props.selected) {
        return <button className='ButtonStar'> {starImg} </button>
    }else{
        return <button className='ButtonStarCheck'> {starImg} </button>
    }


}


export default Rating;