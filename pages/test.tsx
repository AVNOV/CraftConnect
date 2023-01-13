import { useGetArtisans } from "../api/query/artisan.query";
import Button from "../components/Button";
import Head from "next/head";

export default function Test() {
  const { data } = useGetArtisans();
  const handleClick = () => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>CraftConnect</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex bg-red h-full">
        <div>
          <Button onClick={handleClick} />
        </div>
      </main>
    </>
  );
}
