'use client'

import { useState } from 'react'
import { LogoComponent } from './components/LogoComponent/LogoComponent'
import { ToDoForm } from './components/ToDoForm/ToDoForm'
import { ToDoList } from './components/ToDoList/ToDoList'
import { initialValues, PostInterface, StoreContext } from './ContextProvider'

export default function Home() {
  const [posts, setPosts] = useState(initialValues)

  const handlePosts = (posts: PostInterface[]) => {
    setPosts(posts)
  }

  return (
    <main className="flex min-h-screen flex-row items-center justify-around p-24">
      <LogoComponent />

      <StoreContext.Provider value={posts}>
        <ToDoForm setPosts={handlePosts} />
        <ToDoList />
      </StoreContext.Provider>
    </main >
  )
}
