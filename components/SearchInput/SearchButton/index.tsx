import Image from "next/image";
import search_icon from "../../../assets/icons/search_icon.svg";

export default function SearchButton() {
  return (
    <div className="flex bg-black w-14 cursor-pointer">
      <Image src={search_icon} alt="search icon button" className="group search w-7 m-auto" />
    </div>
  );
}
