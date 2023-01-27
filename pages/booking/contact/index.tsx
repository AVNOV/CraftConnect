import { Controller, FieldValues, useForm } from "react-hook-form";
import Checkbox from "../../../components/Checkbox";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useRouter } from "next/router";
import { useAppSelector } from "../../../store";

export default function Contact() {
  const router = useRouter();
  const user = useAppSelector((state) => state.auth.user);
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: FieldValues) => {
    router.push({
      pathname: "",
      query: {
        ...router.query,
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        city: data.city,
      },
    });
  };

  const handleCheck = (event: React.FormEvent<HTMLInputElement>) => {};

  const onPreviousClick = () => {
    router.back();
  };

  return (
    <div className="flex items-center justify-center h-full w-full">
      <form
        className="bg-white shadow-searchcard p-5 rounded w-4/12 space-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Checkbox
          onChange={handleCheck}
          label="Utiliser les information du compte"
        />
        <div className="flex justify-between">
          <Controller
            name="firstname"
            control={control}
            render={({ field }) => (
              <Input
                titleColor="text-black"
                required
                label="Prénom"
                type="text"
                {...field}
              />
            )}
          />
          <Controller
            name="lastname"
            control={control}
            render={({ field }) => (
              <Input
                titleColor="text-black"
                required
                label="Nom"
                type="text"
                {...field}
              />
            )}
          />
        </div>
        <div className="flex justify-between">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                titleColor="text-black"
                required
                label="Email"
                type="email"
                {...field}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <Input
                titleColor="text-black"
                required
                label="Numéro de téléphone"
                type="tel"
                {...field}
              />
            )}
          />
        </div>
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Input
              titleColor="text-black"
              required
              label="Ville"
              type="text"
              {...field}
            />
          )}
        />
        <div className="flex justify-between pt-3">
          <Button onClick={onPreviousClick} children="Précédent" />
          <Button children="Suivant" />
        </div>
      </form>
    </div>
  );
}
