import React, { useEffect, useState } from 'react'
import { databases } from '../../appwrite/config'

const Todos = () => {
    const [todos, setTodos] = useState()
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true);
        const getTodos = databases.listDocuments("64ad46f201244283f18d", "64ad46f9a6d42408d440")
        getTodos.then((response) => {
            setTodos(response.documents);
        }, (error) => {
            console.log(error);
        })
        setLoader(false)
    }, [])

    const deleteTodo = (id) => {
        const promise = databases.deleteDocument("64ad46f201244283f18d", "64ad46f9a6d42408d440", id)
        promise.then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        })
    }

    return (
        <div className="max-w-7xl mx-auto">
            <p className="text-xl font-bold mb-2">Todo List</p>
            {loader ? (
                <p>Loading ...</p>
            ) : (
                <div>
                    {todos &&
                        todos.map(item => (
                            <div key={item.$id} className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
                                <div className='flex space-x-36'>
                                    <p>{item.title}</p>
                                    <p>{item.description}</p>
                                </div>
                                <div>
                                    <button className="text-red-400 cursor-pointer" onClick={() => { deleteTodo(item.$id) }}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            )}
        </div>
    )
}

export default Todos