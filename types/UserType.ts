export type UserType = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    artisan: null | UserType;
    city: string;
    phone_number: string;
    role: string;
    created_at: string;
    updated_at: string;
}