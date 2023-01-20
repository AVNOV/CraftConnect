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
      <div className="flex items-center justify-center bg-white px-2 py-3 border-r">
        <Image
          src={search_icon}
          alt=""
          className={`invert-25 ${size == "small" ? "w-4 h-4" : "w-6 h-6"}`}
        />
        <input
          name={name}
          onChange={onChange}
          value={value}
          required={true}
          placeholder="Nom, spécialité..."
          type="text"
          className={`bg-transparent pl-4 ${
            size === "small" ? "text-base" : "text-lg"
          }`}
        />
      </div>
    );
  }
);

export default ArtisanInput;
