import { forwardRef } from "react";

import Image from "next/image";

import search_icon from "../../../assets/icons/search_icon.svg";

type props = {
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  size?: string;
};

const ArtisanInput = forwardRef(
  ({ name, onChange, value, size }: props, ref) => {
    return (
      <div className="flex items-center md:justify-center w-1/2 bg-white px-1 py-3 border-r md:px-2 md:w-auto">
        <Image
          src={search_icon}
          alt=""
          className={`invert-25 w-3 h-3 ${size == "small" ? "md:w-4 md:h-4" : "md:w-6 md:h-6"}`}
        />
        <input
          name={name}
          onChange={onChange}
          value={value}
          required={true}
          placeholder="Nom, spécialité..."
          type="text"
          className={`w-full bg-transparent pl-1 text-xs md:pl-4 ${
            size === "small" ? "md:text-base" : "md:text-lg"
          }`}
        />
      </div>
    );
  }
);

export default ArtisanInput;
