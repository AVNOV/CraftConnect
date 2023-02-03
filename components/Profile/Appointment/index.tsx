import { FormEvent, useEffect, useState } from "react";
import { AppointmentType } from "../../../types/AppointmentType";
import {
  deleteAppointment,
  getAppointments,
} from "../../../api/query/appointment.query";
import moment from "moment";
import Button from "../../Button";

export default function ProfileAppointmentDisplay() {
  const [appointments, setAppointments] = useState<AppointmentType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAppointments = async () => {
    setIsLoading(true);
    try {
      const response = await getAppointments();
      setAppointments(response);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);
  console.log("appointments", appointments);

  const onDeleteClick = async (id: number) => {
    try {
      const response = await deleteAppointment(id);
      console.log(response);
      const newAppointments = await fetchAppointments();
      console.log("appointments", newAppointments);
    } catch (error) {
      console.error(error);
    }
  };

  const displayAppointments = appointments.map((appointment, index) => (
    <div className="bg-white shadow-searchcard p-5 ml-5 rounded space-y-3 w-11/12 md:w-6/12 lg:w-5/12 xl:w-10/12">
      <div className="flex flex-col justify-between text-sm space-x-1 md:text-base">
        <h3 className="mb-1">Horaires</h3>
        <p className="text-grey text-xs">
          {moment(appointment.day).format("DD MMMM YYYY")} à {""}
          {appointment.hour}h00
        </p>
      </div>
      <div className="border-grey border-y-0.5 py-3 my-3">
        <h3 className="mb-1">Motif</h3>
        <p className="text-grey text-xs">
          {appointment.reason} <br />
          {appointment.description}
        </p>
      </div>
      <div>
        <h3 className="mb-1">Coordonnées de l'artisan</h3>
        <p className="text-grey text-xs">
          {appointment.artisan.company_name} <br />
        </p>
      </div>
      <div className="flex justify-center border-grey border-t-0.5 py-8 my-8 pb-0 mb-0">
        <Button
          color="bg-red-700"
          onClick={() => onDeleteClick(appointment.id)}
          children="Annuler le rendez-vous"
        />
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h2 className="text-3xl mb-8 mt-8">Mes rendez-vous</h2>
      <div className="flex flex-row">{displayAppointments}</div>
    </div>
  );
}
