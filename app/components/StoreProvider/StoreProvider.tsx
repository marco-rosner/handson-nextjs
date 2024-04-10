'use client'

import React, { Dispatch, SetStateAction, useState } from 'react'

interface PostInterface {
    title: string,
    description: string
}

interface StoreProviderInterface {
    children: React.ReactElement | React.ReactElement[]
}

interface ContextInterface {
    posts: PostInterface[],
    setPosts: Dispatch<SetStateAction<PostInterface[]>>
}

const initialValues: PostInterface[] = [{
    title: 'Activity Title',
    description: 'Activity description'
}]

export const StoreContext = React.createContext<ContextInterface>({ posts: initialValues, setPosts: () => { } })

export const StoreProvider = ({ children }: StoreProviderInterface) => {
    const [posts, setPosts] = useState(initialValues)

    return (
        <StoreContext.Provider value={{ posts, setPosts }}>
            {children}
        </StoreContext.Provider>
    )
}