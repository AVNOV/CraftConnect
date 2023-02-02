import { useEffect, useState } from "react";

import SearchInput from "../../components/SearchInput";
import { useRouter } from "next/router";

import { ArtisanSearchBySkillType } from "../../types/ArtisanType";
import SearchCard from "../../components/SearchCard";
import { getArtisanSkillAndArtisanByName } from "../../api/query/artisan-skill.query";

export default function Search() {
  const router = useRouter();
  const data = router.query;
  console.log("search", data.artisan)
  const [artisans, setArtisans] = useState<ArtisanSearchBySkillType>();
  const [isLoading, setIsLoading] = useState(false);
 

  const fetchArtisans = async () => {
    setIsLoading(true);
    try {
      const response = await getArtisanSkillAndArtisanByName(String(data.artisan));
      setArtisans(response);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchArtisans();
  }, []);

  console.log("artisans", artisans)
  const nbResults = artisans?.artisans.length;

  const displaySearchCards = artisans?.artisans.map((artisan, index) => (
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
