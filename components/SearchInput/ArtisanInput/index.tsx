import { forwardRef } from "react";

import Image from "next/image";

import search_icon from "../../../assets/icons/search_icon.svg";

type props = {
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
};

const ArtisanInput = forwardRef(({ name, onChange, value }: props, ref) => {
  return (
    <div className="flex items-center justify-center bg-white px-2 py-3 border-r">
      <Image src={search_icon} alt="" className="w-6 h-6 invert-25" />
      <input
        name={name}
        onChange={onChange}
        value={value}
        required={true}
        placeholder="Nom, spécialité..."
        type="text"
        className="bg-transparent pl-4 text-lg"
      />
    </div>
  );
});

export default ArtisanInput;
