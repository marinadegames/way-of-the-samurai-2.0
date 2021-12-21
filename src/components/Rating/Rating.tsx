// imports
import React, {useState} from "react";

//assets
let starImg = <img src="https://img.icons8.com/ios/20/000000/star--v1.png" alt='png'/>

//type
type RatingProps = {
    //value: number,
}
type StarPropsType = {
    id: number
    selected: boolean
    onClick: any
}

// component
function Rating(props: RatingProps) {

    let [selected, setSelected] = useState(2)

    const setSelectStar = () => {

    }

    return (
        <div className='Rating'>
            <h3 className='ratingTitle'>Rating:</h3>
            <Star id={1} selected={ selected > 0} onClick={ () => { setSelected(1) }} />
            <Star id={2} selected={ selected > 1} onClick={ () => { setSelected(2) }} />
            <Star id={3} selected={ selected > 2} onClick={ () => { setSelected(3) }} />
            <Star id={4} selected={ selected > 3} onClick={ () => { setSelected(4) }} />
            <Star id={5} selected={ selected > 4} onClick={ () => { setSelected(5) }} />
        </div>
    )
}

function Star(props: StarPropsType) {


    if (!props.selected) {
        return <button key={props.id}
                       onClick={props.onClick}
                       className='ButtonStar'> {starImg} </button>
    } else {
        return <button key={props.id}
                       onClick={props.onClick}
                       className='ButtonStarCheck'> {starImg} </button>
    }
}

export default Rating;