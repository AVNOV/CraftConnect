import { CreateAppointmentType } from "../../types/AppointmentType";
import API from "../API";

export const createAppointment = async (appointment: CreateAppointmentType) => {
  const { data } = await API.post("/appointments", appointment);
  return data;
};

export const getAppointments = async () => {
  const { data } = await API.get("/appointments");
  return data;
};
