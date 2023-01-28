import { Controller, useForm } from "react-hook-form";
import Input from "../Input";
import { useAppSelector } from "../../store";
import { UserType } from "../../types/UserType";
import { FormEvent, useEffect, useState } from "react";
import Button from "../Button";

export default function ProfileDisplay() {
  const { handleSubmit, setValue, control, register } = useForm();
  const user: UserType = useAppSelector((state) => state.auth.user);

  const [isEditing, setIsEditing] = useState<boolean>(true);

  const initilizeUserValue = () => {
    setValue("firstname", user.firstname);
    setValue("lastname", user.lastname);
    setValue("email", user.email);
    setValue("phone", user.phone_number);
    setValue("city", user.city);
  };

  useEffect(() => {
    initilizeUserValue()
  }, [])

  const onEditClick = (e: FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const onCancelClick = (e: FormEvent) => {
    e.preventDefault();
    initilizeUserValue()
    setIsEditing(true);
  };
  const onSubmit = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h2 className="text-3xl mb-2 -mt-8">Profile</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-searchcard p-5 rounded w-4/12 space-y-3"
      >
        <div className="flex justify-between">
          <Controller
            name="firstname"
            control={control}
            render={({ field }) => (
              <Input
                disabled={isEditing}
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
                disabled={isEditing}
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
                disabled={isEditing}
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
                disabled={isEditing}
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
              disabled={isEditing}
              titleColor="text-black"
              required
              label="Ville"
              type="text"
              {...field}
            />
          )}
        />
        <div className="flex justify-end space-x-3">
          {!isEditing ? (
            <>
              <Button onClick={onCancelClick} children="Annuler" />
              <Button children="Valider" />
            </>
          ) : (
            <Button onClick={onEditClick} children="Modifier" />
          )}
        </div>
      </form>
    </div>
  );
}
