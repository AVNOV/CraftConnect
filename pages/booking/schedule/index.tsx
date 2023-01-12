import Calendar from "../../../components/Calendar";

export default function Schedule() {
  return (
    <div className="h-full w-full flex flex-col items-center py-5">
      <div className="rounded bg-white shadow-searchcard p-4">
        <Calendar />
      </div>
    </div>
  );
}
