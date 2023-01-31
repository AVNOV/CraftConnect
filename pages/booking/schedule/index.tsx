import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Calendar from "../../../components/Calendar";
import { ArtisanType } from "../../../types/ArtisanType";

import { fakeArtisans } from "../fakeArtisans";

export default function Schedule() {
  const [size, setSize] = useState<string>("large");
  const [artisan, setArtisan] = useState<ArtisanType>();
  const router = useRouter();
  const { artisanId } = router.query;

  useEffect(() => {
    let currentArtisan: ArtisanType = fakeArtisans.find(
      (artisan) => artisan.id === Number(artisanId)
    )!;

    setArtisan(currentArtisan);
  }, [artisanId]);

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
        {artisan && <Calendar size={size} bookedDates={artisan!.appointment} />}
      </div>
    </div>
  );
}
