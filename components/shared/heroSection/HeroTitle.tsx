import React from 'react'

export default function HeroTitle({title}:any) {
  return (
    <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
      {title}
    </h2>
  );
}
