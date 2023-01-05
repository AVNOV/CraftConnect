import { useRouter } from "next/router";
import { useAppDispatch } from "../../../../../store";

import { logout } from "../../../../../slices/auth.slice";

type props = {
  text: string;
  href: string;
};

export default function Item({ text, href }: props) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (href !== "/logout") {
      router.push(href);
    } else {
      dispatch(logout());
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
