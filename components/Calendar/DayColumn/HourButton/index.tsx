import moment from "moment";
import { fakeBookedDates } from "./fakeBookedDates";
import { useEffect, useState } from "react";

type props = {
  selectedDate: Date;
  hour: string;
};

export default function HourButton({ hour, selectedDate }: props) {
  const [isAlreadyBooked, setIsAlreadyBooked] = useState<boolean>(false);
  const bookedDates: string[] = fakeBookedDates;

  useEffect(() => {
    setIsAlreadyBooked(false);
    bookedDates.forEach((date) => {
      if (
        moment(new Date(date)).format("DD MM yyyy HH:mm") ===
        moment(new Date(selectedDate)).format(`DD MM yyyy ${hour}`)
      ) {
        setIsAlreadyBooked(true);
      }
    });
  }, [selectedDate]);

  return (
    <>
      {!isAlreadyBooked ? (
        <li className="flex items-center justify-center w-14 h-7 rounded-md cursor-pointer text-sm text-white bg-red-50% hover:bg-red active:scale-95 transition-hourbutton ">
          {hour}
        </li>
      ) : (
        <li className="flex items-center justify-center text-grey w-14 h-7">
          -
        </li>
      )}
    </>
  );
}
