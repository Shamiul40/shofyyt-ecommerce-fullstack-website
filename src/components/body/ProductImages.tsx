import Image from 'next/image'
import React from 'react'

interface Props {
    images : string[]
}

export default function ProductImages({images}:Props) {
    console.log(images)
  return (
    <div>
        image
      <Image src={images?.[0]} alt="product image" width={500} height={500}/>
    </div>
  )
}
