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
    const [isLoading, setIsLoading] = useState(false);
    const handlePosition = () => {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (position: GeolocationPosition) => {
          try {
            const response = await Geocode.fromLatLng(
              position.coords.latitude.toString(),
              position.coords.longitude.toString()
            );
            const address = response.results[0].formatted_address;
            setValue("location", address);
            setIsLoading(false);
          } catch (error) {
            console.error(error);
            setIsLoading(false);
          }
        }
      );
    };

    return (
      <div className="flex items-center md:justify-center w-5/12 bg-white px-1  py-3 border-r md:px-2 md:w-auto">
        <Image
          src={marker_icon}
          alt=""
          className={`w-3 h-3 ${size == "small" ? "md:w-4 md:h-4" : "md:w-6 md:h-6"}`}
        />
        <input
          name={name}
          onChange={onChange}
          value={value}
          placeholder="Où ?"
          type="text"
          className={`w-full bg-transparent pl-1 text-xs md:pl-4 ${
            size === "small" ? "md:text-base" : "md:text-lg"
          }`}
        />
        {isLoading ? (
          <div
            className={`flex justify-center items-center w-3 h-3 ${
              size == "small" ? "md:w-4 md:h-4" : "md:w-6 md:h-6"
            }`}
          >
            <div
              className={`border-t-transparent border-solid animate-spin rounded-full border-red  ${
                size == "small" ? "border w-2 h-2" : "border-2 w-4 h-4"
              }`}
            />
          </div>
        ) : (
          <Image
            onClick={handlePosition}
            src={position_icon}
            alt="current position button"
            className={`cursor-pointer active:scale-95 transition-transform ${
              size == "small" ? "w-4 h-4" : "w-3 h-3 md:w-6 md:h-6"
            }`}
          />
        )}
      </div>
    );
  }
);

export default LocationInput;
