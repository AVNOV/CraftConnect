import Image from "next/image";
import Geocode from "react-geocode";

import marker_icon from "../../../assets/icons/marker_icon.svg";
import position_icon from "../../../assets/icons/position_icon.svg";
import { useState } from "react";

export default function LocationInput() {
  const [location, setLocation] = useState<string>("");

  const handlePosition = () => {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        Geocode.fromLatLng(
          position.coords.latitude.toString(),
          position.coords.longitude.toString()
        ).then(
          (response) => {
            const address = response.results[0].formatted_address;
            setLocation(address);
          },
          (error: Error) => {
            console.error(error);
          }
        );
      }
    );
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setLocation(event.currentTarget.value);
  };

  return (
    <div className="flex items-center justify-center bg-white px-2 py-3 border-r">
      <Image src={marker_icon} alt="" className="w-6 h-6" />
      <input
        onChange={handleChange}
        value={location}
        placeholder="Où ?"
        type="text"
        className="bg-transparent pl-4 text-lg"
      />
      <Image
        onClick={handlePosition}
        src={position_icon}
        alt="current position button"
        className="w-6 h-6 cursor-pointer active:scale-95 transition-transform"
      />
    </div>
  );
}
