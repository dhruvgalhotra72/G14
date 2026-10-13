// import React from 'react'

// const Login = () => {
//     return (
//         <div>
//             <h1>log</h1>
//             <form action="">
//                 <label htmlFor="">Name</label>
//                 <input type="name" placeholder='write ur name' />

//                 <label htmlFor="">Email</label>
//                 <input type="email" placeholder='write ur email' />

//                 <label htmlFor="">Password</label>
//                 <input type="password" placeholder='write ur password' />

//                 <button>SignUp</button>
//             </form>
//         </div>
//     )
// }

// export default Login




import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { login } from '../redux/authSlice'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(e) {
        e.preventDefault()

        if (email && password) {
            dispatch(login({ email: email }))
            navigate('/')
        }
    }

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8">

                <h1 className="text-3xl font-bold text-white text-center mb-2">
                    Welcome Back
                </h1>

                <p className="text-gray-400 text-center mb-8">
                    Login to continue shopping
                </p>

                <form onSubmit={handleLogin} className="flex flex-col gap-5">

                    <div>
                        <label className="block text-gray-200 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-200 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl cursor-pointer transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-gray-400 text-center mt-6">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-blue-400">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login
