import { RDV } from "../Appointment";

interface Props {
    appointment: RDV;
}

export default function ProfileAppointmentDisplay({ appointment }: Props ) {

    console.log(appointment.artisan);
  
    return (
      <div className="w-full mx-auto pt-5">
        <div className="flex flex-col justify-center items-center">
                <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{appointment.artisan}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Date : {appointment.date}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Adresse : {appointment.adress}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Prévision : {appointment.worktime} /heure(s)</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Description : {appointment.description}</p>
                </a>
        </div>
      </div>
    );
  }
  