'use client'

import { useRouter } from "next/navigation"

export default function Blog() {
    const route = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-[500px]">
          <p className="m-4">NextJS hands on project made by Marco Rosner</p>
          <button type="button" onClick={() => route.back()}>Back</button>
        </div>
    )
}