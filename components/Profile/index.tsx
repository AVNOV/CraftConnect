import React from "react";

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
  return (
    <div className="w-full my-auto">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-96 h-full rounded-lg p-4 shadow-2xl bg-white">
          <div className="w-full mx-auto pt-5">
            <div className="mb-5">
              <h3>Informations du compte</h3>
            </div>
            <div className="flex flex-row justify-between">
              <div className="mr-5">
                <h3>Prénom</h3>
                <p>{user.firstName}</p>
              </div>
              <div>
                <h3>Nom</h3>
                <p>{user.lastName}</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="mr-5">
                <h3>Email</h3>
                <p>{user.email}</p>
              </div>
              <div>
                <h3>Téléphone</h3>
                <p>{user.phoneNumber}</p>
              </div>
            </div>
            <div>
              <h3>Ville</h3>
              <p>{user.city}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
