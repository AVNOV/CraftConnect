import { ArtisanType } from "../../types/ArtisanType";
import Calendar from "../Calendar";

import profile_picture from "../../assets/images/profile_picture.png";
import Image from "next/image";
import Button from "../Button";

type props = {
  artisan: ArtisanType;
};

export default function SearchCard({ artisan }: props) {
  return (
    <li className="flex bg-white rounded shadow-searchcard p-5">
      <div className="flex flex-col justify-between h-60">
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

      <Calendar size="small" bookedDates={artisan.appointment} />
    </li>
  );
}
