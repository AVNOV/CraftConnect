import Head from 'next/head'
import LoginRegister from '../components/LoginRegister'

export default function Login() {
    const onSubmit = (data: any) => {
        console.log(data)
    }

  return (
    <>
      <Head>
        <title>CraftConnect</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-red my-auto'>
        <LoginRegister onSubmit={onSubmit} title="Connection" buttonText='Se connecter' />
      </main>
    </>
  )
}