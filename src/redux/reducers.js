import { 
    SELECT_SONG, 
    ADD_SONG, 
    APPLY_FILTER 
} from './actionTypes'

// const initialState = {
//     songFilters: {},
//     selectedSong: 0,
//     // searchText: '',
//     // user: {},
//     songList: []
// }

export function songs(state = [], action) {
    switch (action.type) {
        case ADD_SONG:
            return [
                ...state, {...action.payload}
            ]
        default:
            return state
    }
}

export function selectSong(state = -1, action) {
    switch (action.type) {
        case SELECT_SONG:
        return action.songId
        default:
        return -1
    }
}

export function filters(state = {}, action) {
    switch (action.type) {
        case APPLY_FILTER:
            return Object.assign({}, state, {
                [action.filter]: !state[action.filter]
            })
        default:
            return state
    }
}
