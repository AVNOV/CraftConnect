import Head from "next/head";
import Image from "next/image";

import background_decoration from "../assets/images/background_decoration.svg";
import artisans_illustration from "../assets/images/artisans_illustration.png";
import users_illustration from "../assets/images/users_illustration.png";

import SearchInput from "../components/SearchInput";

export default function Home() {
  return (
    <>
      <Head>
        <title>CraftConnect</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center relative h-full w-full">
        <Image src={background_decoration} alt="" className="w-full" />
        <div className="absolute top-32 left-32">
          <h2 className="text-4xl text-white">
            Trouvez un rendez-vous avec votre artisan
          </h2>
          <SearchInput />
        </div>
        <div className="text-center w-9/12 mt-10">
          <h1 className="text-3xl">
            CraftConnect - Tous les artisans dont vous avez besoin
          </h1>
          <p className="text-lg mt-5">
            CraftConnect permet aux particuliers de prendre rendez-vous en ligne
            chez des artisans professionnels de leur région. L’application vous
            met en relation avec le professionnel de votre choix afin réaliser
            les travaux de votre maison, votre appartement ou même votre jardin
            !
          </p>
        </div>
        <div className="flex space-x-24 py-20">
          <div className="flex flex-col justify-between w-44 h-full">
            <Image src={artisans_illustration} alt="" />
            <p className="text-center mt-2">
              Plus de <span className="text-red">300</span> artisans à votre
              service
            </p>
          </div>
          <div className="flex flex-col justify-between w-48 h-full">
            <Image src={users_illustration} alt="" />
            <p className="text-center mt-2">
              Plus de <span className="text-red">100 000</span> utilisateurs
              satisfait
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
