import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Calendar from "../../../../components/Calendar";
import { ArtisanType } from "../../../../types/ArtisanType";

import { fakeArtisans } from "../../fakeArtisans";

export default function Schedule() {
  const [artisan, setArtisan] = useState<ArtisanType>();
  const router = useRouter();
  const { artisanId } = router.query;

  useEffect(() => {
    let currentArtisan: ArtisanType = fakeArtisans.find(
      (artisan) => artisan.id === Number(artisanId)
    )!;

    setArtisan(currentArtisan);
  }, [artisanId]);

  return (
    <div className="h-full w-full flex flex-col items-center py-5">
      <div className="rounded bg-white shadow-searchcard p-4">
        {artisan && <Calendar bookedDates={artisan!.appointment} />}
      </div>
    </div>
  );
}
