import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex bg-black text-white h-[60px] items-center justify-between'>
            <h1>Ecom Web</h1>

            <ul className='flex gap-10'>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/abc">Cart</Link>
                </li>

                <li>
                    <Link to="/view">View</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar