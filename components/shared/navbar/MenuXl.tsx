import Link from "next/link";

export default function MenuXl({ link, name, scrolled }: any) {
  return (
    <p>
      <Link
        href={link}
        className={`${scrolled && "text-gray-900"} menu-items`}
      >
        {name}
      </Link>
    </p>
  );
}
