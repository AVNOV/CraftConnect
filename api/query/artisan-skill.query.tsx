import { useQuery } from "react-query";
import API from "../API";

export const useGetArtisanSkill = () => {
  return useQuery("artisanSkill", async () => {
    const { data } = await API.get("/artisanSkills");
    return data;
  });
};

export const getArtisansSkill = async () => {
  const { data } = await API.get("/artisan_skill");
  return data;
};

