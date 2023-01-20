import { Controller, FieldValues, useForm } from "react-hook-form";

import Autocomplete from "../../../components/Autocomplete";
import LargeInput from "../../../components/InputLarge";
import Button from "../../../components/Button";
import { useRouter } from "next/router";

export default function Reason() {
  const router = useRouter();
  const { handleSubmit, control } = useForm();

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const onSubmit = (data: FieldValues) => {
    router.push({
      pathname: "contact",
      query: {
        ...router.query,
        reason: data.reason,
        description: data.description,
      },
    });
  };

  const onPreviousClick = () => {
    router.push("/search");
  };

  return (
    <div className="flex items-center justify-center h-full w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col rounded bg-white shadow-searchcard w-4/12 p-5"
      >
        <label className="mb-2">Motif du rendez-vous</label>
        <Controller
          name="reason"
          control={control}
          render={({ field }) => (
            <Autocomplete
              placeholder="Selectionner un motif"
              options={options}
              required
              className="mx-auto w-10/12"
              {...field}
            />
          )}
        />

        <div className="h-[0.5px] bg-grey w-11/12 mx-auto my-5" />

        <label className="mb-2">Description</label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <LargeInput
              required
              placeholder="(facultatif)"
              className="mx-auto w-10/12"
              {...field}
            />
          )}
        />
        <div className="flex justify-between mt-3">
          <Button onClick={onPreviousClick} children="Précédent" />
          <Button children="Suivant" />
        </div>
      </form>
    </div>
  );
}
