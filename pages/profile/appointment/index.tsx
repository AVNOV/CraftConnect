import Head from "next/head";
import ProfileAppointmentDisplay from "../../../components/Profile/Appointment";

export default function ProfileAppointment() {
  return (
    <>
      <Head>
        <title>CraftConnect</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full">
        <ProfileAppointmentDisplay />
      </main>
    </>
  );
}
