import { SELECT_SONG } from './actionTypes'

export const selectSong = content => ({
    type: SELECT_SONG,
    payload: { 
        content
    }
})