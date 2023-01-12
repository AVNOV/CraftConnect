import { Controller, useForm } from "react-hook-form";
import { Autocomplete } from "../../Autocomplete";
import LargeInput from "../../InputLarge";

export default function ConfirmationAppointmentForm() {
  const { register, handleSubmit, formState: errors, control } = useForm();

  return (
    <div className="w-full my-auto">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-96 h-full rounded-lg p-4 shadow-2xl bg-white">
          <form>
            <div className="w-full mx-auto pt-5">
              Horraires
              <div className="border-t-2 border-gray-300 mt-8 mb-7  "></div>
              Motif
              <div className="border-t-2 border-gray-300 mt-8 mb-7  "></div>
              Coordonnées
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
