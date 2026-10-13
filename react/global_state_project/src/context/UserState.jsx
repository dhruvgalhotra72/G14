import React, { useState } from 'react'
import UserContext from './UserContext'

const UserState = (props) => {
    const [data, setdata] = useState({
        name: "nick",
        age: 44,
        course: "fullstack"
    });

    let arr = [10, 20, 30, 40]


    return (
        <UserContext.Provider value={{ data, arr }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState