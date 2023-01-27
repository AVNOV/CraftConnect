import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type props = {
  selectedDate: Date;
  hour: string;
  bookedDates: string[];
  onClick: (date: string) => void;
};

export default function HourButton({ hour, selectedDate, bookedDates, onClick }: props) {
  const [isAlreadyBooked, setIsAlreadyBooked] = useState<boolean>(false);
  const router = useRouter();

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

  const handleClick = () => {
    router.push({
      pathname: "/booking/reason",
      query: {
        ...router.query,
        date: moment(new Date(selectedDate))
          .set({
            hour: Number(hour.slice(0, 2)),
            minute: Number(hour.slice(3, 5)),
            millisecond: 0,
          })
          .toLocaleString(),
      },
    });
  };

  return (
    <>
      {!isAlreadyBooked ? (
        <li
          onClick={handleClick}
          className="flex items-center justify-center w-14 h-7 rounded-md cursor-pointer text-sm text-white bg-red-50% hover:bg-red active:scale-95 transition-hourbutton "
        >
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
