import { useQuery, useMutation } from "react-query";
import API from "../API";
import { useAppDispatch } from "../../store";
import { login } from "../../slices/auth.slice";


export const loginRequest = async (email: string, password: string) => {
  const { data } = await API.post("/login", { email, password });
  if (data.access_token) {
    const { user } = data;
    const { access_token } = data;
    localStorage.setItem('access_token', access_token);
    const dispatch = useAppDispatch();
    dispatch(login({ user, access_token }));
  }
  return data;
};

export const useGetUsers = () => {
  return useQuery("users", async () => {
    const { data } = await API.get("/users");
    return data;
  });
};

export const useGetUser = (id: string) => {
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
  return useMutation(async (user: {id: string}) => {
    const { data } = await API.put(`/users/${user.id}`, user);
    return data;
  });
};

export const useDeleteUser = () => {
  return useMutation(async (id) => {
    await API.delete(`/users/${id}`);
  });
};
