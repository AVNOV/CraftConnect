import Image from "next/image";

import search_icon from "../../../assets/icons/search_icon.svg";

export default function ArtisanInput() {
  return (
    <div className="flex items-center justify-center bg-white px-2 py-3 border-r">
      <Image src={search_icon} alt="" className="w-6 h-6 invert-25"/>
      <input placeholder="Nom, spécialité..." type="text" className="bg-transparent pl-4 text-lg"/>
    </div>
  );
}
