import { useQuery } from "react-query";
import API from "../API";

export const useGetArtisans = () => {
  return useQuery("artisans", async () => {
    const { data } = await API.get("/artisans");
    return data;
  });
};

export const getArtisans = async () => {
  const { data } = await API.get("/artisans");
  return data;
};

export const getArtisan = async (id: number) => {
  const { data } = await API.get(`/artisans/${id}`);
  return data;
};