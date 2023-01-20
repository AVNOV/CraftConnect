import moment from "moment";
import { useEffect, useState } from "react";
import HourButton from "./HourButton";

type props = {
  date: Date;
  size: string | undefined;
  isExtended: boolean;
  bookedDates: string[]
};

export default function DayColumn({ date, size, isExtended, bookedDates }: props) {
  const [hours, setHours] = useState<string[]>([]);

  useEffect(() => {
    const nbHoursDisplayed = size === "small" && !isExtended ? 5 : 10;
    const newHours: string[] = [];
    for (let index = 9; index < 9 + nbHoursDisplayed; index++) {
      let formatedHour = index.toString();
      if (formatedHour.length === 1) {
        formatedHour = `0${formatedHour}:00`;
      } else {
        formatedHour = `${formatedHour}:00`;
      }
      newHours.push(formatedHour);
    }
    setHours(newHours);
  }, [date, isExtended]);

  const displayHourButtons = hours.map((hour, index) => (
    <HourButton key={index} hour={hour} selectedDate={date} bookedDates={bookedDates} />
  ));

  return (
    <li className="flex flex-col items-center text-sm">
      <div className="flex flex-col items-center">
        <span className="font-bold">
          {moment(date).format("dddd").charAt(0).toUpperCase() +
            moment(date).format("dddd").slice(1)}
        </span>
        <span>{moment(date).format("D MMM")}</span>
      </div>
      <ul className="flex flex-col items-center space-y-3 mt-3">
        {displayHourButtons}
      </ul>
    </li>
  );
}
