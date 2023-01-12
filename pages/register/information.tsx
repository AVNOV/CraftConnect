import Head from 'next/head'
import InformationForm from '../../components/InformationForm'
import { useRouter } from 'next/router';

export default function Information() {
  const router = useRouter();
  const onSubmit = (data: any) => {
    console.log(data)
    router.push('/');
}
  return (
    <>
      <Head>
        <title>CraftConnect</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex bg-red h-full'>
       <InformationForm onSubmit={onSubmit} buttonText={`Valider`} title={"Informations"} />
      </main>
    </>
  )
}