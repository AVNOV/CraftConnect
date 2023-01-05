import Link from "next/link";
import { useRouter } from "next/router";

type props = {
  text: string;
  href: string;
};

export default function Item({ text, href }: props) {
  const router = useRouter();
  const handleClick = () => {
    if(href !== '/logout') {
        router.push(href);
    } else {

    }
  };

  return (
    <li
      onClick={handleClick}
      className="flex items-center w-36 h-11 pl-3 hover:bg-grey transition-colors cursor-pointer"
    >
      {text}
    </li>
  );
}
