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
    //star: boolean,
    //selectedBtn: () => void
}

// component
function Rating(props: RatingProps) {



    return (
        <div className='Rating'>
            <h3>Rating:</h3>
            <Star id={1}/>
            <Star id={2}/>
            <Star id={3}/>
            <Star id={4}/>
            <Star id={5}/>
        </div>
    )
}

function Star (props: StarPropsType){



    let [selected, setSelected] = useState(false)



    const selectedBtn = () => {
        selected ? setSelected(false) : setSelected(true)
    }

    if (!selected) {
        return <button key={props.id}
                       onClick={ selectedBtn }
                       className='ButtonStar'> {starImg} </button>
    }else{
        return <button key={props.id}
                       onClick={ selectedBtn }
                       className='ButtonStarCheck'> {starImg} </button>
    }
}
export default Rating;