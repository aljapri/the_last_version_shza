"use client"
import Link from "next/link";
import { useParams } from "next/navigation";
export default function MenuXl({ link, name, scrolled }: any) {
  const params = useParams();

  return (
    <p >
    <Link href={`/${params.locale}/${link}`} className={`${scrolled && "text-gray-900"} menu-items cursor-pointer z-50`}>
        {name}
      </Link>
    </p>
  );
}
