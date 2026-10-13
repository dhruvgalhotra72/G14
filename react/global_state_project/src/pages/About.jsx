import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const About = (props) => {
    // props --> {data:10}

    let name = "jack"

    let ctx = useContext(UserContext);
    console.log(ctx)
    return (
        <div style={{ backgroundColor: "crimson" }}>
            This is About page
            <p>{props.data}</p>
            <p>Name:{ctx.data.name}</p>
            <p>Age:{ctx.data.age}</p>
        </div>
    )
}

export default About