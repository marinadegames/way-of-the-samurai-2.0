import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {

    const [fake, setFake] = useState<number>(1)
    const [counter, setCounter] = useState<number>(1)
    // console.log('Simple Example')


    useEffect(() => {
        // console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        // console.log('useEffect only first render')
        document.title = counter.toString()
    }, [counter])

    useEffect(() => {
        // console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])


    return (
        <>
            Hello, {counter}
            <button onClick={() => setFake(fake + 1)}>fake +</button>
            <button onClick={() => setCounter(counter + 1)}>counter +</button>
        </>
    )

}
export const SetTimeoutExample = () => {

    const [fake, setFake] = useState<number>(1)
    const [counter, setCounter] = useState<number>(1)
    console.log('Set Timeout Example')


    useEffect(() => {

        setInterval(() => {
            // console.log('tick ' + counter)
            setCounter(counter + 1)
        }, 1000)

    }, [counter])


    return (
        <>
            Counter: {counter} - Fake: {fake}
            {/*<button onClick={() => setFake(fake + 1)}>fake +</button>*/}
            {/*<button onClick={() => setCounter(counter + 1)}>counter +</button>*/}
        </>
    )

}
export const ResetEffectExample = () => {
    const [counter, setCounter] = useState<number>(1)

    console.log('COMPONENT RENDERED!')

    useEffect(() => {
        console.log('Effect occurred!')

        return () => {
            console.log('RESET EFFECT')
        }

    }, [])


    return (
        <>
            HELLO, counter: {counter}
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
        </>
    )

}
export const KeysTrackerExample = () => {
    const [text, setText] = useState<string>('')

    console.log('COMPONENT RENDERED WITH ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }


        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])


    return (
        <>
            Typed text: {text}
        </>
    )

}