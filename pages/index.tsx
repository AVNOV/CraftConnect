import Head from "next/head";
import Image from "next/image";

import background_decoration from "../assets/images/background_decoration.svg";
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
      <main className="h-full w-full">
        <Image
          src={background_decoration}
          alt=""
          className="absolute left-0 top-0 w-full"
        />
        <div className="relative z-10">
          <div className="mt-20 ml-32">
            <h2 className="text-4xl text-white">
              Trouvez un rendez-vous avec votre artisan
            </h2>
            <SearchInput />
          </div>
        </div>
      </main>
    </>
  );
}
