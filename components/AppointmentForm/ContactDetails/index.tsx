import { Controller, useForm } from "react-hook-form";
import Input from "../../Input";
import { Checkbox } from "../../Checkbox";

type Props = {
  accountInformation: boolean;
  setAccountInformation: (accountInformation: boolean) => void;
  firstName: string;
  setFirstName: (firstName: string) => void;
  lastName: string;
  setLastName: (lastName: string) => void;
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
};

export default function ContactDetailsForm({
  accountInformation,
  setAccountInformation,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phone,
  setPhone,
}: Props) {
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
                        value={firstName}
                        onChange={(e) => setFirstName(e)}
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
                      value={lastName}
                      onChange={(e) => setLastName(e)}
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
                        value={email}
                        onChange={(e) => setEmail(e)}
                      />
                    )}
                  />
                </div>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <Input
                      required
                      titleColor="text-black"
                      label="Téléphone"
                      type="tel"
                      {...field}
                      value={phone}
                      onChange={(e) => setPhone(e)}
                    />
                  )}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
