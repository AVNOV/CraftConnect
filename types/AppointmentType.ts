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