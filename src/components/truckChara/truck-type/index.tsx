import React from 'react'
import Image from 'next/image'


export const TruckType = ({ src, text }: any): any => {
  return (
    <div>
      <h3 className="text-1xl font-black text-center">{text}</h3>
      <Image
        width="150"
        height="150"
        className="object-cover"
        alt={text}
        src={src}
      />
    </div>
  )
}

