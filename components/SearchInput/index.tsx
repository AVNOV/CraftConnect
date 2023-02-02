import { useRouter } from "next/router";
import ArtisanInput from "./ArtisanInput";
import LocationInput from "./LocationInput";
import SearchButton from "./SearchButton";

import { useForm, Controller } from "react-hook-form";

type props = {
  size?: string;
};

export default function SearchInput({ size }: props) {
  const router = useRouter()

  const { handleSubmit, setValue, control } = useForm({
    defaultValues: {
      artisan: "",
      location: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data)
    router.push({ pathname: "/search",
    query: data})
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex rounded overflow-hidden w-11/12 md:w-fit mt-5 shadow-searchcard"
    >
      <Controller
        name="artisan"
        control={control}
        render={({ field }) => <ArtisanInput size={size} {...field} />}
      />
      <Controller
        name="location"
        control={control}
        render={({ field }) => <LocationInput size={size}  setValue={setValue} {...field} />}
      />
      <SearchButton size={size}  />
    </form>
  );
}
