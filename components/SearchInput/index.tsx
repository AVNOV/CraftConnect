import ArtisanInput from "./ArtisanInput";
import LocationInput from "./LocationInput";
import SearchButton from "./SearchButton";

export default function SearchInput() {
  return (
    <div className="flex rounded overflow-hidden w-fit mt-5">
      <ArtisanInput />
      <LocationInput />
      <SearchButton />
    </div>
  );
}
