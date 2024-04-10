'use client'

import { useState } from "react";
import { useStore } from "../../hooks/useStore";

export const ToDoForm = () => {
    const initialState = { title: '', description: '' }
    const [state, setState] = useState(initialState)
    const { posts, setPosts } = useStore();

    const handleChange = (e: any, field: string) =>
        setState({ title: state.title, description: state.description, [field]: e.target.value } as any)

    const handleSubmit = () => {
        setPosts([...posts, { title: state.title, description: state.description }])

        setState(initialState)
    }

    return (
        <div className="mb-32 grid text-center lg:mb-0 lg:text-left">
            <h2 className={`mb-3 text-2xl font-semibold`}>
                TO DO List
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Add your itens below:
            </p>
            <div className="flex justify-between pb-4">
                <label>Title</label>
                <input name="title" value={state.title} onChange={(e) => handleChange(e, 'title')} />
            </div>
            <div className="flex justify-between pb-4">
                <label>Description</label>
                <input name="description" value={state.description} onChange={(e) => handleChange(e, 'description')} />
            </div>
            <div className="flex justify-end">
                <button type="button" onClick={handleSubmit}>Add item</button>
            </div>
        </div>
    )
}