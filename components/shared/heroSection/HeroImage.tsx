import Image from 'next/image'
import React from 'react'

export default function HeroImage({image}:any) {
  return (
    <>
      <Image src={image} width={1000} height={400} alt="image" />
    </>
  );
}
