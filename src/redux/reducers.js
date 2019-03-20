import { 
    SELECT_SONG, 
    ADD_SONG, 
    UPDATE_STYLES_FILTERS, 
    UPDATE_LOCATIONS_FILTERS, 
    UPDATE_LANGUAGES_FILTERS, 
    UPDATE_SEARCH,
    UPDATE_MATCHING_OPTION,
    EXPAND_FILTER_GROUP
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
    languages: {
        "English": false,
        "Hebrew": false,
        "Arabic": false,
        "French": false,
        "Spanish": false
    },
    styles: {
        "Fast": false,
        "Slow": false,
        "Meditative": false,
        "Poetic": false,
        "Traditional": false
    },
    locations: {
        'Fishtown/Kensington': false,
        'South Broad': false,
        'Ridge Ave': false,
        'Marlton': false
    },
    options: {
        matchAll: false,
        languages: true,
        styles: true,
        locations: true
    }
}

export function filters(state = initialFilters, action) {
    // console.log('action.type', action.type)
    switch (action.type) {
        case UPDATE_STYLES_FILTERS:
            return Object.assign({}, state, {
                styles: {
                    ...state.styles,
                    [action.filter]: !state.styles[action.filter]
                }
            })
        case UPDATE_LOCATIONS_FILTERS:
            return Object.assign({}, state, {
                locations: {
                    ...state.locations,
                    [action.filter]: !state.locations[action.filter]
                }
            })
        case UPDATE_LANGUAGES_FILTERS:
            return Object.assign({}, state, {
                languages: {
                    ...state.languages,
                    [action.filter]: !state.languages[action.filter]
                }
            })
        case UPDATE_MATCHING_OPTION:
            return Object.assign({}, state, {
                options: {
                    ...state.options,
                    matchAll: !state.options.matchAll
                }
            })
        case EXPAND_FILTER_GROUP:
            return Object.assign({}, state, {
                options: {
                    ...state.options,
                    [action.group]: !state.options[action.group]
                }
            })
        default:
            return state
    }
}
