import { useQuery } from "react-query";
import API from "../API";

export const useGetArtisanSkill = () => {
  return useQuery("artisanSkill", async () => {
    const { data } = await API.get("/artisanSkills");
    return data;
  });
};

