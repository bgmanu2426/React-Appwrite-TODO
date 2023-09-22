import React, { useState } from 'react'
import { databases } from '../../appwrite/config'
import { ID } from 'appwrite'

const TodoForm = () => {
    const [todo, setTodo] = useState({
        title: "",
        description: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const promise = databases.createDocument("64ad46f201244283f18d", "64ad46f9a6d42408d440", ID.unique(), {
            title: todo.title,
            description: todo.description
        });
        promise.then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
        setTodo({
            title: "",
            description: ""
        })
    }
    return (
        <>
            <div className="min-h-full flex flex-col justify-center py-4 sm:px-6 lg:px-8">
                <div className="py-2 px-4 sm:rounded-lg sm:px-10">
                    <form onSubmit={handleSubmit} className="mt-8 sm:mx-auto sm:w-full flex justify-center flex-col sm:max-w-md space-y-6">
                        <div>
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Title
                            </label>
                            <div className="mt-1">
                                <input
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    id="title"
                                    name="title"
                                    type="text"
                                    placeholder='Enter Title'
                                    autoComplete='title'
                                    value={todo.title}
                                    onChange={(e) => {
                                        setTodo({ ...todo, title: e.target.value })
                                    }}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Description
                            </label>
                            <div className="mt-1">
                                <textarea
                                    className="appearance-none resize-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    id="description"
                                    name="description"
                                    cols={10}
                                    rows={4}
                                    type="text"
                                    placeholder='Enter Description'
                                    autoComplete='description'
                                    value={todo.description}
                                    onChange={(e) => {
                                        setTodo({ ...todo, description: e.target.value })
                                    }}
                                    required
                                />
                            </div>
                        </div>
                        <button
                            className="bg-purple-500 p-2 text-white rounded-md hover:bg-purple-600"
                            type="submit"
                        >
                            Add Todo
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default TodoForm