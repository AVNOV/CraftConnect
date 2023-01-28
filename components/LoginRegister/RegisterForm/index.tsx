import { Controller, useForm } from "react-hook-form";
import Input from "../../Input";
import Button from "../../Button";
import Tabs from "../../Tabs";
import { useState } from "react";
import { AutocompleteRegister } from "../../Autocomplete/AutocompleteRegister";

type InformationFormProps = {
  title?: string;
  buttonText: string;
  onSubmit: (data: any) => void;
};

export default function InformationForm({ title, buttonText, onSubmit }: InformationFormProps) {
  const { register, handleSubmit, formState: errors, control } = useForm();

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const [selectedTab, setSelectedTab] = useState("Particulier");

  return (
    <div className="w-full my-auto">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="text-3xl font-bold text-white mb-2">{title}</div>
        <Tabs
          tabNames={["Particulier", "Artisan"]}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <div className="w-1/3 h-full rounded-lg p-4 shadow-lg bg-white-50%">
          {selectedTab === "Particulier" ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-2/3 mx-auto pt-5">
                <Controller
                  name="lastname"
                  control={control}
                  render={({ field }) => (
                    <Input required label="Nom" type="input" {...field} />
                  )}
                />
                <Controller
                  name="firstname"
                  control={control}
                  render={({ field }) => (
                    <Input label="Prénom" type="input" {...field} />
                  )}
                />
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <Input label="Ville" type="input" {...field} />
                  )}
                />
                <Controller
                  name="phone_number"
                  control={control}
                  render={({ field }) => (
                    <Input label="Téléphone" type="phone" {...field} />
                  )}
                />
              </div>
              <div className="flex items-center justify-center my-6">
                <Button type="submit">{buttonText}</Button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-2/3 mx-auto pt-5">
                <Controller
                  name="lastname"
                  control={control}
                  render={({ field }) => (
                    <Input required label="Nom" type="input" {...field} />
                  )}
                />
                <Controller
                  name="firstname"
                  control={control}
                  render={({ field }) => (
                    <Input label="Prénom" type="input" {...field} />
                  )}
                />
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <Input label="Ville" type="input" {...field} />
                  )}
                />
                <Controller
                  name="phone_number"
                  control={control}
                  render={({ field }) => (
                    <Input label="Téléphone" type="phone" {...field} />
                  )}
                />
                <Controller
                  name="company_name"
                  control={control}
                  render={({ field }) => (
                    <Input label="Nom entreprise" type="input" {...field} />
                  )}
                />
                <Controller
                  name="category_skill"
                  control={control}
                  render={({ field, formState: { errors } }) => (
                    <AutocompleteRegister
                      options={options}
                      onChange={(option) => field.onChange(option.value)}
                      title="Domaine d'activité"
                    />
                  )}
                />
              </div>
              <div className="flex items-center justify-center my-6">
                <Button type="submit">{buttonText}</Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}