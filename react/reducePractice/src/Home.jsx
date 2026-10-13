import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    let ctx = useSelector((state) => state.c)
    console.log(ctx)
    return (
        <div style={{ backgroundColor: "brown", color: "white" }}>
            <h1>This is Home Page</h1>

            <h1>Count : {ctx.value} </h1>
            <h2>User name = {ctx.user.name}</h2>
            <h2>User email = {ctx.user.email}</h2>

            <button>Increment</button>
            <button>Decrement</button>
            <button>Update User name</button>
            <button>Update User email</button>
        </div>
    )
}

export default Home