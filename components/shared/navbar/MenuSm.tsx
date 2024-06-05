import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react'

export default function MenuSm({link,name}:any) {
  const params = useParams();

  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  console.log(params);
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
