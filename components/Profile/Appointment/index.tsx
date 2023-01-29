import { useAppSelector } from "../../../store";
import { UserType } from "../../../types/UserType";

export default function ProfileAppointmentDisplay() {
    const user: UserType = useAppSelector((state) => state.auth.user);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h2 className="text-3xl mb-2 -mt-8">Mes rendez-vous</h2>
      <div className="bg-white shadow-searchcard p-5 rounded w-4/12 space-y-3">
        <div className="flex justify-between"></div>
      </div>
    </div>
  );
}
