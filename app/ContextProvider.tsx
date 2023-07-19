'use client'

import React, { useContext } from 'react'

export interface PostInterface {
    title: string,
    description: string
}

const initialValues: PostInterface[] = [{
    title: 'Activity Title',
    description: 'Activity description'
}]

const StoreContext = React.createContext(initialValues)
StoreContext.displayName = 'StoreContext'



export const useStoreContext = () => useContext(StoreContext);

export { StoreContext, initialValues }