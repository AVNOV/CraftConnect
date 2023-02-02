import { ArtisanType } from "./ArtisanType";
import { UserType } from "./UserType";

export type AppointmentType = {
    id: number;
    client: UserType;
    artisan: ArtisanType;
    address: string;
    day: string;
    hour: number;
    status: string;
    description: string;
    reason: string;
}

export type CreateAppointmentType = {
    client: number;
    artisan: number;
    address: string;
    day: string;
    hour: number;
    status: string;
    description: string;
    reason: string;
}

export type ReasonAppointmentType = {
    id: number;
    name: string;
};