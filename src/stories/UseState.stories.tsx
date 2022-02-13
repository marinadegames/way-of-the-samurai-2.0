import React, {useMemo, useState} from "react";


export default {
    title: 'useState demo'
}


function generateData () {
    console.log('generate')
    return 32414214125;
}


export const Example1 = () => {
    console.log('Example_1')
    // const initValue = useMemo(generateData, [])
    const [counter, setCounter] = useState<number>(generateData)


    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </>
    )


}