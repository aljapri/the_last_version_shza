import ScrollAppear from "../ScrollAppear";
export default function SocialMedia({ Icon, id, url }: any) {
  let delay = 1;
  return (
    <>
      <ScrollAppear threads={delay}>
        <li className="text-xl sm:text-2xl md:text-3xl">
          <a
            href={url}
            target="__blank"
            key={id}
            className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg dark:bg-ternary-dark shadow-sm p-4 duration-300"
          >
            {<Icon />}
          </a>
        </li>
      </ScrollAppear>
    </>
  );
}
