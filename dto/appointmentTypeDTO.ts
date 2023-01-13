export enum Status {
    booking = 0,
    accepted = 1
  }

export interface appointmentTypeDTO {
    id: number
    client_id: number
    artisan_id: number
    adress: string
    day: Date
    hour: number
    status: Status
}