import ArtisanInput from "./ArtisanInput";
import LocationInput from "./LocationInput";
import SearchButton from "./SearchButton";

import { useForm, Controller } from "react-hook-form";

export default function SearchInput() {
  const { handleSubmit, setValue, control } = useForm({
    defaultValues: {
      artisan: "",
      location: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data)
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex rounded overflow-hidden w-fit mt-5"
    >
      <Controller
        name="artisan"
        control={control}
        render={({ field }) => <ArtisanInput {...field} />}
      />
      <Controller
        name="location"
        control={control}
        render={({ field }) => <LocationInput setValue={setValue} {...field} />}
      />
      <SearchButton />
    </form>
  );
}
