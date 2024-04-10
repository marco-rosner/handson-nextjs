'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export const Logo = () => {
    const router = useRouter()

    return (
        <div className="relative flex flex-col place-items-center">
            <Image
                className="relative pb-4 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
            />

            <button type="button" onClick={() => router.push("/about")}>About</button>
        </div>
    )
}