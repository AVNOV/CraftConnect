import { Controller, useForm } from "react-hook-form";
import Input from "../../Input";
import { Checkbox } from "../../Checkbox";

export default function ContactDetailsForm() {
  const { register, handleSubmit, formState: errors, control } = useForm();

  return (
    <div className="w-full my-auto">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-96 h-full rounded-lg p-4 shadow-2xl bg-white">
          <form>
            <div className="w-full mx-auto pt-5">
                <div className="mb-5">
                  <Controller
                    name="accountInformation"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        label="Utiliser les informations du compte"
                        {...field}
                      />
                    )}
                  />
                </div>
              <div className="flex flex-row justify-between">
                <div className="mr-5">
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <Input
                        required
                        label="Prénom"
                        type="text"
                        titleColor="text-black"
                        {...field}
                      />
                    )}
                  />
                </div>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      required
                      titleColor="text-black"
                      label="Nom"
                      type="text"
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="flex flex-row">
                <div className="mr-5">
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
                </div>
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field }) => (
                    <Input
                      required
                      titleColor="text-black"
                      label="Téléphone"
                      type="text"
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
                    required
                    titleColor="text-black"
                    label="Ville"
                    type="text"
                    {...field}
                  />
                )}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
