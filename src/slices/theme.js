
import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: { theme: 'light' },
    reducers: {
        setLightTheme: state => {
            state.theme = 'light';
        },
        setDarkTheme: state => {
            state.theme = 'dark';
        }
    }
})

export const selectTheme = (state) => state.theme.theme;

export const {
    setLightTheme,
    setDarkTheme,
} = themeSlice.actions

export default themeSlice.reducer;
