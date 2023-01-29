import Head from "next/head";
import ProfileDisplay from "../../components/Profile";

export default function Profile() {
  return (
    <>
      <Head>
        <title>CraftConnect</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full">
        <ProfileDisplay />
      </main>
    </>
  );
}
