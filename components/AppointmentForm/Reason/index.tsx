import { Controller, useForm } from "react-hook-form";
import Autocomplete from "../../Autocomplete";
import Input from "../../Input";
import LargeInput from "../../InputLarge";

type props = {
  reasonAppointment: string;
  setReasonAppointment: (reasonAppointment: string) => void;
  description: string;
  setDescription: (description: string) => void;
};

export default function ReasonAppointmentForm({
  reasonAppointment,
  setReasonAppointment,
  description,
  setDescription,
}: props) {
  const { register, handleSubmit, formState: errors, control } = useForm();

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <div className="w-full my-auto">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-96 h-full rounded-lg p-4 shadow-2xl bg-white">
          <form>
            <div className="w-full mx-auto pt-5">
              {/* <Controller
                name="reasonAppointment"
                control={control}
                render={({ field, formState: { errors } }) => (
                  <Autocomplete
                    options={options}
                    dropdownDirection="down"
                    onChange={(option) => {
                      setReasonAppointment(option.value);
                      field.onChange(option.value);
                    }}
                    title="Motif du rendez-vous"
                    name="reasonAppointment"
                    titleColor="text-black"
                  />
                )}
              /> */}
              <div className="border-t-2 border-gray-300 mt-8 mb-7  "></div>
              {/* <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <LargeInput
                    required
                    label="Description"
                    placeholder="(facultatif)"
                    {...field}
                    value={description}
                    onChange={(e) => setDescription(e)}
                  />
                )}
              /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
