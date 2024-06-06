"use client"
import Link from "next/link";
import ScrollAppear from "../ScrollAppear";
import { useParams } from "next/navigation";

export default function Menu({ name, link }: any) {
  const params = useParams();

  return (
    <>
      <li key={name}>
        <Link
          href={`/${params.locale}/${link}`}
          className="mr-4 hover:underline md:mr-6 "
        >
          {name}
        </Link>
      </li>
    </>
  );
}
