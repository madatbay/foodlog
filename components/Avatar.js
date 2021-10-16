import React from 'react'
import Image from 'next/image'

export default function Avatar({ src, name }) {
    return (
        <div className="flex items-center space-x-2 mt-1">
            <div className="w-8 h-8 relative rounded-full overflow-hidden border-2 border-white">
            <Image src={src} layout="fill" className="object-cover"/>
            </div>
            <p className="text-md text-gray-500">{name}</p>
        </div>
    )
}
