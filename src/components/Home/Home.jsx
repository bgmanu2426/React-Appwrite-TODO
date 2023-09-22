import React, { useEffect, useState } from 'react'
import { account } from '../../appwrite/config'
import { Link, useNavigate } from 'react-router-dom'
import Todos from './Todos'
import TodoForm from './TodoForm'

const Home = () => {
    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState()

    useEffect(() => {
        const promise = account.get();
        promise.then((response) => {
            console.log(response);
            setUserDetails(response);
        }, (error) => {
            console.log(error);
        });
    }, [])

    const handleLogout = () => {
        const promise = account.deleteSession('current');
        promise.then(function (response) {
            console.log(response);
            navigate('/login')
        }, function (error) {
            console.log(error);
        });
    }
    return (
        <>
            {userDetails &&
                <>
                    <div className="min-h-min max-w-7xl mx-auto shadow-md flex justify-between text-right py-3 px-3 mt-2 rounded-md">
                        <div>
                            <p className="text-xl">Hello {userDetails.name}</p>
                        </div>
                        <div>
                            <button
                                className="bg-red-400 text-white px-2 py-1 rounded font-semibold hover:bg-red-600"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                    <TodoForm />
                    <Todos />
                </>
            }
            {!userDetails &&
                <div className="min-h-[80vh] flex flex-col space-y-10 justify-center items-center">
                    <div className='text-2xl font-semibold'>Please Login to access TODO's</div>
                    <Link to="/login">
                        <span className="bg-blue-500 px-4 py-2 cursor-pointer text-white rounded hover:bg-blue-700">
                            Login
                        </span>
                    </Link>
                </div>
            }
        </>
    )
}

export default Home