export interface RDV {
  artisan: string,
  adress: string,
  description: string,
  date: string,
  worktime: number,
}

interface Props {
  appointments: RDV[]
}

export default function ProfileAppointmentDisplay({ appointments }: Props ) {

  return (
    <div className="ml-20 mr-20 mx-auto pt-5">
      <div className="justify-center items-center">
          <h2 className="mb-5 mt-2 font-medium leading-tight text-base text-black"><u>Liste des rendez-vous à venir:</u></h2>
        <div className="relative rounded-lg overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs rounded-lg text-gray-700 uppercase bg-gray-50 dark:bg-red-800 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-white">
                            Artisan
                        </th>
                        <th scope="col" className="px-6 py-3 text-white">
                            Adresse
                        </th>
                        <th scope="col" className="px-6 py-3 text-white">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-white">
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                {appointments.map((src, key) => {
                                return (
                                  <tr key={key} className="bg-white hover:cursor-pointer hover:bg-gray-300 dark:bg-gray-400 dark:border-gray-700 overflow-auto">
                                        <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
                                          <u>{src.artisan}</u>
                                        </th>
                                        <td className="px-6 py-4 text-black">{src.adress}</td>
                                        <td className="px-6 py-4 text-black">{src.date}</td>
                                        <td className="px-6 py-4 text-black">{src.description}</td>
                                  </tr>
                                );
                            })}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}
