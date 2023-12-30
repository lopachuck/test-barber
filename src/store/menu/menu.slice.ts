import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isMenuOpen: false,
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        openMenu: (state, action) => {
            state.isMenuOpen = action.payload
        },
    },
})

export const { openMenu } = menuSlice.actions
export default menuSlice.reducer
