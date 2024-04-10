'use client'

import { LogoComponent } from './components/LogoComponent/LogoComponent'
import { StoreProvider } from './components/StoreProvider/StoreProvider'
import { ToDoForm } from './components/ToDoForm/ToDoForm'
import { ToDoList } from './components/ToDoList/ToDoList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-around p-24">
      <LogoComponent />

      <StoreProvider>
        <ToDoForm />
        <ToDoList />
      </StoreProvider>
    </main >
  )
}
