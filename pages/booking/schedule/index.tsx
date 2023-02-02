import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Calendar from "../../../components/Calendar";
import { ArtisanSearchType } from "../../../types/ArtisanType";

import { getArtisan } from "../../../api/query/artisan.query";

export default function Schedule() {
  const [size, setSize] = useState<string>("large");
  const router = useRouter();
  const { artisanId } = router.query;

  const [artisan, setArtisan] = useState<ArtisanSearchType>();
  const [isLoading, setIsLoading] = useState(false);
 

  const fetchArtisan = async () => {
    setIsLoading(true);
    try {
      const response = await getArtisan(Number(artisanId));
      setArtisan(response);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchArtisan();
  }, []);

  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth < 768 ? "small" : "large");
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center py-5">
      <div className="rounded bg-white shadow-searchcard p-4">
        {artisan && <Calendar size={size} bookedDates={[""]} />}
      </div>
    </div>
  );
}
