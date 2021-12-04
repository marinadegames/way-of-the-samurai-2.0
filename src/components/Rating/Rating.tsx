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
    if (props.value === 1) {
        return (
            <div className='Rating'>
                <h3>Rating:</h3>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 2){
        return (
            <div className='Rating'>
                <h3>Rating:</h3>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 3){
        return (
            <div className='Rating'>
                <h3>Rating:</h3>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 4){
        return (
            <div className='Rating'>
                <h3>Rating:</h3>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 5){
        return (
            <div className='Rating'>
                <h3>Rating:</h3>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        )
    }
    return (
        <div className='Rating'>
            <h3>Rating:</h3>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
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