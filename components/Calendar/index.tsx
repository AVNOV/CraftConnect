import { useEffect, useMemo, useRef, useState } from "react";
import moment from "moment";

import arrow_icon from "../../assets/icons/arrow_icon.svg";

import DayColumn from "./DayColumn";
import Image from "next/image";
import { useRouter } from "next/router";
import { ArtisanType } from "../../types/ArtisanType";

type props = {
  size?: string;
  artisan?: ArtisanType
  bookedDates: string[];
};

export default function Calendar({ size, artisan, bookedDates }: props) {
  const router = useRouter();
  const [isExtended, setIsExtended] = useState<boolean>(false);
  const [dates, setDates] = useState<Date[]>([]);
  const extendedArrow = useRef<HTMLImageElement>(null);
  const nbDaysDisplayed = useMemo<number>(() => {
    let newSize: number;
    if (size === "small") {
      newSize = 4;
    } else if (size === "medium") {
      newSize = 5;
    } else {
      newSize = 7;
    }

    return newSize;
  }, [size]);

  useEffect((): void => {
    const newDates: Date[] = [];
    for (let index = 0; index < nbDaysDisplayed; index++) {
      newDates.push(
        moment()
          .add(1 + index, "days")
          .toDate()
      );
    }
    setDates(newDates);
  }, [nbDaysDisplayed]);

  const handlePrevioustDays = (): void => {
    if (
      moment().format("DD MM YYYY") !==
      moment(dates[0]).subtract(1, "days").format("DD MM YYYY")
    ) {
      const newDates: Date[] = [];
      dates.forEach((date, index) => {
        newDates[index] = moment(date)
          .subtract(nbDaysDisplayed, "days")
          .toDate();
      });
      setDates(newDates);
    }
  };

  const handleNextDays = (): void => {
    const newDates: Date[] = [];
    dates.forEach((date, index) => {
      newDates[index] = moment(date).add(nbDaysDisplayed, "days").toDate();
    });
    setDates(newDates);
  };

  const handleExtended = (): void => {
    if (isExtended) {
      extendedArrow.current!.style.transform = "rotateX(0deg)";
    } else {
      extendedArrow.current!.style.transform = "rotateX(180deg)";
    }
    setIsExtended(!isExtended);
  };

  const displayColumns = dates.map((date, index) => (
    <DayColumn
      key={index}
      date={date}
      artisan={artisan}
      isExtended={isExtended}
      bookedDates={bookedDates}
    />
  ));

  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        <Image
          onClick={handlePrevioustDays}
          src={arrow_icon}
          alt="previous dates icon"
          className="self-start mt-3 rotate-90 cursor-pointer active:scale-95 transition-transform"
        />
        <ul className="flex space-x-5 px-3">{displayColumns}</ul>
        <Image
          onClick={handleNextDays}
          src={arrow_icon}
          alt="next dates icon"
          className="self-start mt-3 -rotate-90 cursor-pointer active:scale-95 transition-transform"
        />
      </div>
      {router.pathname === "/search" && (
        <Image
          ref={extendedArrow}
          onClick={handleExtended}
          src={arrow_icon}
          alt="next dates icon"
          className="mt-3 cursor-pointer active:scale-95 transition-transform"
        />
      )}
    </div>
  );
}
