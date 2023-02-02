import { useRouter } from "next/router";
import { useAppDispatch } from "../../store";
import { login } from "../../slices/auth.slice";
import { loginRequest } from "../../api/query/user.query";

import Head from "next/head";
import LoginRegister from "../../components/LoginRegister";

import { FieldValues } from "react-hook-form";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [error, setError] = useState("");

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await loginRequest(data.email, data.password);
      dispatch(
        login({ user: response.user, access_token: response.access_token })
      );
      setError("");
      router.push("/");
    } catch (error: any) {
      console.error(error);
      setError("Erreur, vérifiez votre email et/ou votre mot de passe.");
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
        <LoginRegister
          onSubmit={onSubmit}
          title="Connexion"
          buttonText="Se connecter"
          error={error}
        />
      </main>
    </>
  );
}
