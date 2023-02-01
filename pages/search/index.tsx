import { useState } from "react";

import SearchInput from "../../components/SearchInput";
import { useRouter } from "next/router";

import { fakeArtisans } from "../booking/fakeArtisans";
import { ArtisanType } from "../../types/ArtisanType";
import SearchCard from "../../components/SearchCard";
import { getArtisans } from "../../api/query/artisan.query";

export default function Search() {
  const router = useRouter();
  const data = router.query;
  console.log("search", data.artisan)
  const artisan = async () => {
    try {
      const response = await getArtisans();
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  console.log("artisan", artisan())
  const [artisans] = useState<ArtisanType[]>(fakeArtisans);
  const nbResults = artisans.length;

  const displaySearchCards = artisans.map((artisan, index) => (
    <SearchCard key={index} artisan={artisan} />
  ));

  return (
    <div className="flex flex-col items-center w-full min-h-full bg-grey-light">
      <SearchInput size="small" />
      <div className="my-14">
        <p className="text-xs">{nbResults} résultats trouvés</p>
        <ul className=" space-y-10">{displaySearchCards}</ul>
      </div>
    </div>
  );
}
