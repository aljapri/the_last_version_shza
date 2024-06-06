import React from 'react'

export default function HeroText({text}:any) {
  return (
    <>
      <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed break-words">
        {text}
      </h3>
    </>
  );
}
