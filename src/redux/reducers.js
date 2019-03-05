import { 
    SELECT_SONG, 
    ADD_SONG, 
    UPDATE_FILTER, 
    UPDATE_SEARCH
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

export function selectSong(state = { selectedSongId: -1 }, action) {
    switch (action.type) {
        case SELECT_SONG:
            return Object.assign({}, state, { 
                selectedSongId: action.payload.selectedSongId
            })
        default:
            return state
    }
}

export function updateSearch(state = { searchText: '' }, action) {
    switch (action.type) {
        case UPDATE_SEARCH:
            return { ...state, searchText: action.payload.searchText }
        default:
            return state
    }
}

const initialFilters = {
    "English": false,
    "Non-English": false,
    "Fast": false,
    "Slow": false,
    "Meditative": false,
    "Poetic": false
}

export function filters(state = initialFilters, action) {
    console.log(action)
    switch (action.type) {
        case UPDATE_FILTER:
            return Object.assign({}, state, {
                [action.filter]: !state[action.filter]
            })
        default:
            return state
    }
}
