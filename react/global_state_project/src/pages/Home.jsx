import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Home = (props) => {
    // props-->  {x:10}
    let ctx = useContext(UserContext)
    console.log(ctx) // {data:{}, arr}
    console.log(ctx.data) //{}
    return (
        <div style={{ backgroundColor: "yellow", color: "brown" }}>
            This is Home Page
            <p>{props.x}</p>
            <p>Name:{ctx.data.name}</p>
            <p>age:{ctx.data.age}</p>
            <p>course:{ctx.data.course}</p>
        </div>
    )
}

export default Home