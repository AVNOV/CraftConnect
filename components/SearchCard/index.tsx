import { ArtisanTypeR } from "../../types/ArtisanType";
import Calendar from "../Calendar";

import profile_picture from "../../assets/images/profile_picture.png";
import Image from "next/image";
import Button from "../Button";
import { useEffect, useState } from "react";

type props = {
  artisan: ArtisanTypeR;
};

export default function SearchCard({ artisan }: props) {
  const [size, setSize] = useState<string>("medium");

  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth < 768 ? "small" : "medium");
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <li className="flex flex-col bg-white rounded shadow-searchcard p-2 md:p-5 md:flex-row">
      <div className="flex flex-col justify-between h-60 mb-10 md:mb-0">
        <div className="flex mr-40">
          <Image src={profile_picture} alt="" className="w-16 h-16" />
          <div className="ml-3">
            <p>
              {artisan.firstname} {artisan.lastname}
            </p>
            <p className="text-grey text-sm">{artisan.skill} </p>
          </div>
        </div>
        <p className="ml-3 text-sm">{artisan.city}</p>
        <Button
          href={{
            pathname: "/booking/schedule",
            query: { artisanId: artisan.id },
          }}
          className="w-fit"
          children="Prendre rendez-vous"
          type="button"
        />
      </div>

      <Calendar size={size} bookedDates={artisan.appointment} />
    </li>
  );
}
