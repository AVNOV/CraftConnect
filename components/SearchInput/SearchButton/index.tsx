import Image from "next/image";

import search_icon from "../../../assets/icons/search_icon.svg";

type props = {
  size?: string;
};

export default function SearchButton({ size }: props) {
  return (
    <button className={`flex bg-black ${size === "small"? "w-10":"w-14"}`}>
      <Image
        src={search_icon}
        alt="search icon button"
        className={`group search m-auto ${size === "small"? "w-5":"w-7"}`}
      />
    </button>
  );
}
