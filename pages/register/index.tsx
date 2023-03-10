import Head from "next/head";
import LoginRegister from "../../components/LoginRegister";
import { useRouter } from "next/router";
import { FieldValues } from "react-hook-form";

export default function Register() {
  const router = useRouter();
  const onSubmit = (data: FieldValues) => {
    router.push({
      pathname: "/register/information",
      query: { email: data.email, password: data.password },
    });
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
        <LoginRegister
          onSubmit={onSubmit}
          title="Inscription"
          buttonText={`S'inscrire`}
        />
      </main>
    </>
  );
}
