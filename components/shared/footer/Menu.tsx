import Link from "next/link";
import ScrollAppear from "../ScrollAppear";

export default function Menu({ name, link }: any) {
  let delay = 0.5;

  return (
    <>
        <li key={name}>
          <Link href={link} className="mr-4 hover:underline md:mr-6 ">
            {name}
          </Link>
        </li>
    </>
  );
}
