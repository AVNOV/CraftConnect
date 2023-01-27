import moment from "moment";

type Props = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  reasonAppointment: string;
  description: string;
  selectedDate: string | undefined;
};

export default function ConfirmationAppointmentForm({
  selectedDate,
  firstName,
  lastName,
  email,
  phone,
  reasonAppointment,
  description,
}: Props) {
  return (
    <div className="w-full my-auto">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-96 h-full rounded-lg p-4 shadow-2xl bg-white">
          <form>
            <div className="w-full mx-auto pt-5">
              <p className="text-lg font-bold">Horraires</p>
              <p className="mt-2">{selectedDate}</p>
              <div className="border-t-2 border-gray-300 mt-6 mb-5"></div>
              <p className="text-lg font-bold">Motif</p>
              <p className="mt-2">{reasonAppointment}</p>
              <p className="mt-2">{description}</p>
              <div className="border-t-2 border-gray-300 mt-6 mb-5"></div>
              <p className="text-lg font-bold">Coordonnées</p>
              <div className="flex flex-row">
                <p className="mt-2 mr-5">{lastName}</p>
                <p className="mt-2">{firstName}</p>
              </div>
              <p className="mt-2">{phone}</p>
              <p className="mt-2">{email}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
