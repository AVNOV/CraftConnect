import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type ArtisanTypeDTO = {
    id: number,
    company_name: string,

    client_id: number,
    adress: string,
    day: Date,
    hour: number,
    status: boolean,

    worksite: boolean,
    skill_name: string,

    days_of_week_enable: string,
    hours_of_day_enable: string
};

type ArtisanType = {
    id: number,
    company_name: string,

    client_id: number,
    adress: string,
    day: Date,
    hour: number,
    status: boolean

    worksite: boolean,
    skill_name: string,

    days_of_week_enable: string,
    hours_of_day_enable: string
};

type ArtisanState = {
    currentArtisan: ArtisanType[]
};

const initialState: ArtisanState = {
    currentArtisan: [],
};

const tarifSlice = createSlice({
    name: 'artisan',
    initialState,
    reducers: {
        setArtisan: (state, action: PayloadAction<ArtisanTypeDTO[]>) => {
            state.currentArtisan = action.payload;
        },
    },
});

export const { setArtisan } = tarifSlice.actions;

export const selectArtisan = ({artisan}: RootState) : ArtisanType[] => artisan.currentArtisan;

export default tarifSlice.reducer;