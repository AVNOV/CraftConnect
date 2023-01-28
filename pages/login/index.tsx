import Head from "next/head";
import LoginRegister from "../../components/LoginRegister";
import { FieldValues } from "react-hook-form";
import { loginRequest } from "../../api/query/user.query";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter()
  const onSubmit = async (data: FieldValues) => {
    try {
      await loginRequest(data.email, data.password);
      router.push('/')
    } catch (error: any) {
      console.error(error.code, { message: error.message });
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
        />
      </main>
    </>
  );
}
