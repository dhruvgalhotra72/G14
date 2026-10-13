import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeNamer, increment } from './redux/counterSlice';

const About = () => {
    let globalData = useSelector((state) => state.c); //{value: 0,arr:[10, 20, 30, 40],user:{name:"one", email:"one@gmail.com"}},
    let dispatch = useDispatch();

    function handleIncrement() {
        // dispatch({task:"increment karao"})
        dispatch(increment())
    }

    return (
        <div style={{ backgroundColor: "yellow", color: "black" }}>
            <h1>This is About page</h1>
            <h1>Count : {globalData.value} </h1>
            <h2>User name = {globalData.user.name}</h2>
            <h2>User email = {globalData.user.email}</h2>

            <button onClick={handleIncrement}>Increment</button>
            <button>Decrement</button>
            <button onClick={() => dispatch(changeNamer("undertaker"))}>Update User name</button>
            <button>Update User email</button>
        </div>
    )
}

export default About