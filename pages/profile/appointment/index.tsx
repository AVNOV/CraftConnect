import Head from "next/head";
import ProfileAppointmentDisplay from "../../../components/Profile/Appointment";
import ProfileAppointmentDetailsDisplay from "../../../components/Profile/AppointmentDetails";

interface Appointment {
  artisan: string;
  adress: string;
  description: string;
  day: string;
  hour: number;

}

export default function ProfileAppointment() {
  const testAppointments = [
    {
      artisan: "Francis le plombier",
      adress: "20 rue de la réparation",
      description: "Fuite à la chaudière",
      date: "02/02/2023",
      worktime: 2,
    },
    {
      artisan: "Marc le Maçon",
      adress: "20 rue de la réparation",
      description: "Réparation du mur porteur",
      date: "16/02/2023",
      worktime: 4,
    },
    {
      artisan: "Amed le plaquiste",
      adress: "20 rue de la réparation",
      description: "Renovation isolation et BA13 murs de la chambre, il y a de gros problème d'humidité dans le bâtiment causant des problèmes de moisissure sur le mur et dans les coins.",
      date: "08/03/2023",
      worktime: 8,
    },
    {
      artisan: "Francis le plombier",
      adress: "20 rue de la réparation",
      description: "Désembouage du réseaux chauffage cuivre de la maison",
      date: "15/04/2023",
      worktime: 5,
    },
    {
      artisan: "Amed le plaquiste",
      adress: "20 rue de la réparation",
      description: "Renovation isolation et BA13 murs de la chambre",
      date: "08/03/2023",
      worktime: 8,
    },
    {
      artisan: "Yvan l'élec",
      adress: "20 rue de la réparation",
      description: "Mise en place du boitier électrique",
      date: "30/04/2023",
      worktime: 5,
    },
    {
      artisan: "Amed le plaquiste",
      adress: "20 rue de la réparation",
      description: "Renovation isolation et BA13 murs de la chambre",
      date: "30/03/2023",
      worktime: 8,
    },
    {
      artisan: "Francis le plombier",
      adress: "20 rue de la réparation",
      description: "Désembouage du réseaux chauffage cuivre de la maison",
      date: "30/04/2023",
      worktime: 5,
    },
    {
      artisan: "Francis le plombier",
      adress: "20 rue de la réparation",
      description: "Fuite à la chaudière",
      date: "02/02/2023",
      worktime: 2,
    },
    {
      artisan: "Marc le Maçon",
      adress: "20 rue de la réparation",
      description: "Réparation du mur porteur",
      date: "16/02/2023",
      worktime: 4,
    },
    {
      artisan: "Amed le plaquiste",
      adress: "20 rue de la réparation",
      description: "Renovation isolation et BA13 murs de la chambre",
      date: "08/03/2023",
      worktime: 8,
    },
    {
      artisan: "Francis le plombier",
      adress: "20 rue de la réparation",
      description: "Désembouage du réseaux chauffage cuivre de la maison",
      date: "15/04/2023",
      worktime: 5,
    },
    {
      artisan: "Amed le plaquiste",
      adress: "20 rue de la réparation",
      description: "Renovation isolation et BA13 murs de la chambre",
      date: "08/03/2023",
      worktime: 8,
    },
    {
      artisan: "Yvan l'élec",
      adress: "20 rue de la réparation",
      description: "Mise en place du boitier électrique",
      date: "30/04/2023",
      worktime: 5,
    },
    {
      artisan: "Amed le plaquiste",
      adress: "20 rue de la réparation",
      description: "Renovation isolation et BA13 murs de la chambre",
      date: "30/03/2023",
      worktime: 8,
    },
    {
      artisan: "Francis le plombier",
      adress: "20 rue de la réparation",
      description: "Désembouage du réseaux chauffage cuivre de la maison",
      date: "30/04/2023",
      worktime: 5,
    },
  ];

  return (
    <>
      <Head>
        <title>CraftConnect</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full">
        <ProfileAppointmentDisplay appointments={testAppointments}/>
      </main>
    </>
  );
}
