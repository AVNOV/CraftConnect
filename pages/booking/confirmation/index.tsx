import { useRouter } from "next/router";
import Button from "../../../components/Button";
import moment from "moment";

export default function Confirmation() {
  const router = useRouter();

  const handleClick = () => {
    router.push({ pathname: "validation", query: router.query });
  };

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="flex flex-col rounded bg-white shadow-searchcard p-5 w-11/12 md:w-6/12 lg:w-4/12">
        <div>
          <h3 className="mb-1">Horaires</h3>
          <p className="text-grey text-xs">
            {moment(router.query.date).format("DD MMMM YYYY à HH:mm")}
          </p>
        </div>
        <div className="border-grey border-y-0.5 py-3 my-3">
          <h3 className="mb-1">Motif</h3>
          <p className="text-grey text-xs">
            {router.query.reason} <br />
            {router.query.description}
          </p>
        </div>
        <div>
          <h3 className="mb-1">Coordonnées</h3>
          <p className="text-grey text-xs">
            {router.query.firstname} {router.query.lastname} <br />
            {router.query.email} <br />
            {router.query.phone} <br />
            {router.query.city}
          </p>
        </div>
        <Button onClick={handleClick} children="Confirmer" className="self-end mt-5" />
      </div>
    </div>
  );
}
