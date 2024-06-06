import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react'

export default function MenuSm({link,name}:any) {
  const params = useParams();


  return (
    <p key={link}>
      <Link
        href={`/${params.locale}/${link}`}
        className={"text-green menu-items text-gray-900 cursor-pointer"}
      >
        {name}
      </Link>
    </p>
  );
}
