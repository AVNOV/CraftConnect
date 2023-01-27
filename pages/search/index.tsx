import { useState } from "react";

import SearchInput from "../../components/SearchInput";

import { fakeArtisans } from "../booking/fakeArtisans";
import { ArtisanType } from "../../types/ArtisanType";
import SearchCard from "../../components/SearchCard";

export default function Search() {
  const [artisans] = useState<ArtisanType[]>(fakeArtisans);
  const nbResults = 5;

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
