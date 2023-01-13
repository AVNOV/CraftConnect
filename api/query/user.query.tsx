import { useQuery, useMutation } from "react-query";
import API from "../API";

export const useGetUsers = () => {
  return useQuery("users", async () => {
    const { data } = await API.get("/users");
    return data;
  });
};

export const useGetUser = (id) => {
  return useQuery(["user", id], async () => {
    const { data } = await API.get(`/users/${id}`);
    return data;
  });
};


export const useCreateUser = () => {
  return useMutation(async (user) => {
    const { data } = await API.post("/users", user);
    return data;
  });
};

export const useUpdateUser = () => {
  return useMutation(async (user) => {
    const { data } = await API.put(`/users/${user.id}`, user);
    return data;
  });
};

// Delete a user
export const useDeleteUser = () => {
  return useMutation(async (id) => {
    await API.delete(`/users/${id}`);
  });
};
