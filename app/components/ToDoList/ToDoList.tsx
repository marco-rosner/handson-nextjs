'use client'

import Image from "next/image"
import { useStoreContext } from "../../ContextProvider"

export const ToDoList = () => {
    const posts = useStoreContext();

    return (
        <div className="relative flex flex-col before:w-[400px]">
            {
                posts.map((post, i) => (
                    <div key={`post-${i}`} className="flex flex-row m-4">
                        <div className={`p-4 lg:mb-0 lg:text-left`}>
                            <Image alt="todo" width={50} height={50} src="/../../favicon.ico" />
                        </div>
                        <div className="mb-32 text-left lg:mb-0 lg:text-left">
                            <h2 className={`mb-3 text-2xl font-semibold`}>
                                {post.title}
                            </h2>
                            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                                {post.description}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}