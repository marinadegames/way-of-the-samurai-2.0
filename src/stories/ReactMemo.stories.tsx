import React, {useState} from "react";

export default {
    title: 'React.memo DEMO'
}


const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS')
    return (
        <div>
            {props.users.map((u, i) => <div>{u}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Eugene", 'Elina', 'Artem', 'Dima'])

    const addUser = () => {
        const newUser = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUser)
    }

    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            <button onClick={addUser}>add user
            </button>
            <NewMessageCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}


