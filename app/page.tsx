'use client'

import { Logo, StoreProvider, ToDoForm, ToDoList } from './components'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-around p-24">
      <Logo />

      <StoreProvider>
        <ToDoForm />
        <ToDoList />
      </StoreProvider>
    </main >
  )
}
