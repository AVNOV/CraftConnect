import { useRouter } from "next/router";
import Button from "../../../components/Button";
import moment from "moment";

export default function Validation() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="flex flex-col items-center rounded bg-white shadow-searchcard p-5 w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
        <p className="text-center mb-5">
          Le rendez-vous pour votre{" "}
          <span className="text-red">{router.query.reason}</span> est bien
          validé pour le
          <br />
          <span className="text-red">
            {moment(router.query.date).format("DD MMMM YYYY à HH:mm")}
          </span>
        </p>
        <Button href="/" children="Revenir à l'accueil" />
      </div>
    </div>
  );
}
