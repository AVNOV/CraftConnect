import Head from "next/head";

import { useRouter } from "next/router";
import RegisterForm from "../../../components/LoginRegister/RegisterForm";
import { createUser } from "../../../api/query/user.query";
import { FieldValues } from "react-hook-form";

export default function Information() {
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await createUser({
        email: router.query.email as string,
        password: router.query.password as string,
        firstname: data.firstname,
        lastname: data.lastname,
        city: data.city,
        phone_number: data.phone_number,
      });
      console.log(response);
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
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
        <RegisterForm
          onSubmit={onSubmit}
          buttonText={`Valider`}
          title={"Informations"}
        />
      </main>
    </>
  );
}
