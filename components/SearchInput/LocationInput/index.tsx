import { forwardRef, useState } from "react";
import { UseFormSetValue } from "react-hook-form";

import Image from "next/image";
import Geocode from "react-geocode";

import marker_icon from "../../../assets/icons/marker_icon.svg";
import position_icon from "../../../assets/icons/position_icon.svg";

type props = {
  setValue: UseFormSetValue<{ artisan: string; location: string }>;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  size?: string;
};

const LocationInput = forwardRef(
  ({ name, onChange, value, setValue, size }: props, ref) => {
    const handlePosition = () => {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          Geocode.fromLatLng(
            position.coords.latitude.toString(),
            position.coords.longitude.toString()
          ).then(
            (response) => {
              const address = response.results[0].formatted_address;
              setValue("location", address);
            },
            (error: Error) => {
              console.error(error);
            }
          );
        }
      );
    };

    return (
      <div className="flex items-center justify-center bg-white px-2 py-3 border-r">
        <Image
          src={marker_icon}
          alt=""
          className={`${size == "small" ? "w-4 h-4" : "w-6 h-6"}`}
        />
        <input
          name={name}
          onChange={onChange}
          value={value}
          placeholder="Où ?"
          type="text"
          className={`bg-transparent pl-4 ${
            size === "small" ? "text-base" : "text-lg"
          }`}
        />
        <Image
          onClick={handlePosition}
          src={position_icon}
          alt="current position button"
          className={`cursor-pointer active:scale-95 transition-transform ${
            size == "small" ? "w-4 h-4" : "w-6 h-6"
          }`}
        />
      </div>
    );
  }
);

export default LocationInput;
