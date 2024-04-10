'use client'

import { useRouter } from "next/navigation"

export default function About() {
  const route = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <p className="m-4">NextJS hands on project made by Marco Rosner</p>
      <button type="button" onClick={() => route.back()}>Back</button>
    </div>
  )
}