import { useState } from "react";
import Button from "../Button";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city: string;
}

interface Props {
  user: User;
}

export default function ProfileDisplay({ user }: Props) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [city, setCity] = useState(user.city);
  const [formModified, setFormModified] = useState(false);

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
    setFormModified(true);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
    setFormModified(true);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setFormModified(true);
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
    setFormModified(true);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
    setFormModified(true);
  };

  const handleCancel = () => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
    setPhoneNumber(user.phoneNumber);
    setCity(user.city);
    setFormModified(false);
  };

  const handleSubmit = () => {
    setFormModified(false);
  };

  return (
    <div className="w-full mx-auto pt-5">
      <div className="flex flex-col h-1/2 w-1/2 justify-center items-center mx-auto my-auto">
        <div className="h-full rounded-lg p-4 w-full shadow-2xl bg-white">
          <div className="pt-5 h-full">
            <div className="mb-5 text-center text-xl font-medium">
              Informations du compte
            </div>
            <div className="flex flex-row justify-between">
              <div className="mr-5 mb-5">
                <div className="text-lg font-medium">Prénom</div>
                <input
                  className="text-base"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </div>
              <div>
                <div className="text-lg font-medium">Nom</div>
                <input
                  className="text-base"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="mr-5 mb-5">
                <div className="text-lg font-medium">Email</div>
                <input
                  className="text-base"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div>
                <div className="text-lg font-medium">Téléphone</div>
                <input
                  className="text-base"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
              </div>
            </div>
            <div>
              <div className="text-lg font-medium">Ville</div>
              <input
                className="text-base"
                value={city}
                onChange={handleCityChange}
              />
            </div>
            {formModified && (
              <div className="flex justify-center pt-5">
                <div className="mr-5">
                  <Button onClick={handleCancel}>Annuler</Button>
                </div>
                <div>
                  <Button onClick={handleSubmit}>Valider</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
