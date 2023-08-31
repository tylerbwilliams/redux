
import { createSlice } from '@reduxjs/toolkit';

export const isEnabledSlice = createSlice({
    name: 'isEnabled',
    initialState: { isEnabled: true },
    reducers: {
        toggleIsEnabled: state => {
            state.isEnabled = !state.isEnabled;
        }
    }
})

export const selectIsEnabled = (state) => state.isEnabled.isEnabled;

export const { toggleIsEnabled } = isEnabledSlice.actions

export default isEnabledSlice.reducer;
