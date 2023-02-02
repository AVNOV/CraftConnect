import { Controller, FieldValues, useForm } from "react-hook-form";

import Autocomplete from "../../../components/Autocomplete";
import LargeInput from "../../../components/InputLarge";
import Button from "../../../components/Button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getArtisanSkillByName } from "../../../api/query/artisan-skill.query";
import { ArtisanSkillType } from "../../../types/ArtisanType";

export default function Reason() {
  const router = useRouter();
  const { handleSubmit, control } = useForm();
  const { artisanSkillName } = router.query;

  const [artisanSkill, setArtisanSkill] = useState<ArtisanSkillType>();
  const [isLoading, setIsLoading] = useState(false);
 

  const fetchArtisanSkill = async () => {
    setIsLoading(true);
    try {
      const response = await getArtisanSkillByName(String(artisanSkillName));
      setArtisanSkill(response);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchArtisanSkill();
  }, []);

  console.log("reason", artisanSkillName)


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
    router.back()
  };

  return (
    <div className="flex items-center justify-center h-full w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col rounded bg-white shadow-searchcard p-5 w-11/12 md:w-6/12 lg:w-4/12"
      >
        <label className="mb-2">Motif du rendez-vous</label>
        <Controller
          name="reason"
          control={control}
          render={({ field }) => (
            <Autocomplete
              placeholder="Selectionner un motif"
              options={artisanSkill?.reasons}
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
