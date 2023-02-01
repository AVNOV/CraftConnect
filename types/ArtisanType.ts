import { ReasonAppointmentType } from "./AppointmentType";
import { UserType } from "./UserType";

export type ArtisanTypeR = {
  id: number;
  firstname: string;
  lastname: string;
  skill: string;
  city: string;
  appointment: string[];
};

export type ArtisanType = {
  id: number;
  company_name: string;
  artisanSchedule: ArtisanScheduleType;
  artisanSkill: string[];
}

export type ArtisanSearchType = {
  id: number;
  company_name: string;
  artisanSchedule: ArtisanScheduleType;
  artisanSkill: string[];
  user: UserType;
};

export type ArtisanScheduleType = {
  id: number;
  days_of_week_enabled: string;
  hours_of_day_enabled: string;
};

export type ArtisanSkillType = {
  id: number;
  name: string;
  reasons: ReasonAppointmentType;
};
