// imports
import React, {useState} from "react";

//assets
let starImg = <img src="https://img.icons8.com/ios/20/000000/star--v1.png" alt='png'/>

//type
type RatingProps = {
    //value: number,
}
type StarPropsType = {
    selected: boolean
    setSelected: (value: 1 | 2 | 3 | 4 | 5 ) => void
    value: 1 | 2 | 3 | 4 | 5
}

// component
function Rating(props: RatingProps) {

    let [selected, setSelected] = useState(2)

    return (
        <div className='Rating'>
            <h3 className='ratingTitle'>Rating:</h3>
            <Star selected={selected > 0} setSelected={setSelected} value={1} />
            <Star selected={selected > 1} setSelected={setSelected} value={2} />
            <Star selected={selected > 2} setSelected={setSelected} value={3} />
            <Star selected={selected > 3} setSelected={setSelected} value={4} />
            <Star selected={selected > 4} setSelected={setSelected} value={5} />
        </div>
    )
}

function Star(props: StarPropsType) {
    return <button className={!props.selected ? 'ButtonStar' : 'ButtonStarCheck'}
                   onClick={() => {
                       props.setSelected(props.value)
                   }}> {starImg} </button>
}

export default Rating;