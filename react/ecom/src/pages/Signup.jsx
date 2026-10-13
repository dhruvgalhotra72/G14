import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='w-[550px] m-auto' >
            {/* <h1>haha</h1> */}
            <form action="" className='border flex flex-col p-5 rounded-2xl gap-2'>

                <label htmlFor="">Name</label>
                <input className='border px-2 py-1 rounded' type="name" placeholder='write ur name' />

                <label htmlFor="">Email</label>
                <input className='border px-2 py-1 rounded' type="email" placeholder='write ur email' />

                <label htmlFor="">Password</label>
                <input className='border px-2 py-1 rounded' type="password" placeholder='write ur password' />

                <button className='bg-green-950 text-white w-full hover:bg-green-700 rounded p-2'>SignUp</button>

                {/* <p className='text-center text-black'>Already a user ? </p><p className='text-right text-blue-700 hover:text-amber-950'>Login Now</p> */}


                <p className="text-center text-black">
                    Already a user?{' '}
                    <Link
                        to="/login"
                        className="text-blue-700 hover:text-amber-950 hover:underline cursor-pointer font-semibold"
                    >
                        Login Now
                    </Link>
                </p>

            </form>
        </div>
    )
}

export default Signup



// import React from 'react'

// const Signup = () => {
//     return (
//         <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-10">

//             <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">

//                 <h1 className="text-3xl font-bold text-white text-center mb-2">
//                     Create Account
//                 </h1>

//                 <p className="text-gray-400 text-center mb-8">
//                     Sign up to get started with shopping
//                 </p>

//                 <form className="flex flex-col gap-5">

//                     <div className="flex flex-col gap-2">
//                         <label className="text-sm font-medium text-gray-200">
//                             Full Name
//                         </label>

//                         <input
//                             type="text"
//                             placeholder="Enter your name"
//                             className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
//                         />
//                     </div>

//                     <div className="flex flex-col gap-2">
//                         <label className="text-sm font-medium text-gray-200">
//                             Email Address
//                         </label>

//                         <input
//                             type="email"
//                             placeholder="Enter your email"
//                             className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
//                         />
//                     </div>

//                     <div className="flex flex-col gap-2">
//                         <label className="text-sm font-medium text-gray-200">
//                             Password
//                         </label>

//                         <input
//                             type="password"
//                             placeholder="Create a password"
//                             className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-900/30 transition duration-300 cursor-pointer"
//                     >
//                         Create Account
//                     </button>

//                 </form>

//                 <p className="text-gray-400 text-sm text-center mt-6">
//                     Already have an account?{' '}
//                     <a
//                         href="/login"
//                         className="text-blue-400 hover:text-blue-300 font-semibold"
//                     >
//                         Login
//                     </a>
//                 </p>

//             </div>
//         </div>
//     )
// }

// export default Signup
