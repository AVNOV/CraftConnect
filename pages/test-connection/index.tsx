import { useGetUsers } from "../../api/query/user.query";
import Button from "../../components/Button";
import Head from "next/head";
import { useAppSelector } from "../../store";
import { UserType } from "../../types/UserType";

export default function Test() {
  const { data } = useGetUsers();
  const handleClick = () => {
    console.log(data);
  };

  const user: UserType = useAppSelector((state) => state.auth.user);

console.log(user)
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
        <p>{user.email}</p>
      </main>
    </>
  );
}
