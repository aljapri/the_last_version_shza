import Link from 'next/link';
import React from 'react'

export default function MenuSm({link,name}:any) {
  return (
    <p>
      <Link href={link} className={"text-green menu-items text-gray-900"}>
        {name}
      </Link>
    </p>
  );
}
