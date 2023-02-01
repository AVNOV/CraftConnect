import { FormEvent, useEffect, useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { useAppDispatch, useAppSelector } from "../../store";
import { UserType } from "../../types/UserType";
import { UpdateUserType } from "../../types/UpdateUserType";
import { deleteUser, updateUser } from "../../api/query/user.query";
import { logout } from "../../slices/auth.slice";

import Input from "../Input";
import Button from "../Button";

export default function ProfileDisplay() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { handleSubmit, setValue, control } = useForm();
  const user: UserType = useAppSelector((state) => state.auth.user);

  const [isEditing, setIsEditing] = useState<boolean>(true);

  const initilizeUserValue = () => {
    setValue("firstname", user.firstname);
    setValue("lastname", user.lastname);
    setValue("email", user.email);
    setValue("phone_number", user.phone_number);
    setValue("city", user.city);
  };

  useEffect(() => {
    initilizeUserValue();
  }, [user]);

  const onDeleteClick = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await deleteUser(user.id);
      dispatch(logout());
      console.log(response);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  const onEditClick = (e: FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const onCancelClick = (e: FormEvent) => {
    e.preventDefault();
    initilizeUserValue();
    setIsEditing(true);
  };

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await updateUser(user.id, data as UpdateUserType);
      console.log(response);
      setIsEditing(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h2 className="text-3xl mb-2 -mt-8">Mon profil</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-searchcard p-5 rounded space-y-3 w-11/12 md:w-6/12 lg:w-5/12 xl:w-4/12"
      >
        <div className="flex justify-between text-sm space-x-1 md:text-base">
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
        <div className="flex justify-between text-sm space-x-1 md:text-base">
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
            name="phone_number"
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
        <div className="flex justify-end space-x-3 pt-5">
          {!isEditing ? (
            <>
              <Button
                color="bg-red-700"
                onClick={onCancelClick}
                children="Annuler"
              />
              <Button children="Valider" />
            </>
          ) : (
            <>
              <Button
                color="bg-red-700"
                onClick={onDeleteClick}
                children="Supprimer"
              />
              <Button onClick={onEditClick} children="Modifier" />
            </>
          )}
        </div>
      </form>
    </div>
  );
}
