import { 
    SELECT_SONG, 
    UPDATE_SEARCH,

    UPDATE_STYLES_FILTERS,
    UPDATE_LOCATIONS_FILTERS,
    UPDATE_LANGUAGES_FILTERS,
    UPDATE_MATCHING_OPTION,
    EXPAND_FILTER_GROUP,

    ADD_TO_SETLIST,
    REMOVE_FROM_SETLIST
} from './actionTypes'

// import { getState } from 'redux'

import store from './store'

export const selectSong = selectedSongId => {
    return { 
        type: SELECT_SONG,
        payload: {
            selectedSongId
        }
    }
}

export const updateSearch = searchText => {
    return {
        type: UPDATE_SEARCH,
        payload: {
            searchText
        }
    }
}

// FILTERS
export const updateStylesFilters = filter => {
    return {
        type: UPDATE_STYLES_FILTERS,
        filter
    }
}
export const updateLocationsFilters = filter => {
    return {
        type: UPDATE_LOCATIONS_FILTERS,
        filter
    }
}
export const updateLanguagesFilters = filter => {
    return {
        type: UPDATE_LANGUAGES_FILTERS,
        filter
    }
}

export const updateMatchingOption = () => {
    return {
        type: UPDATE_MATCHING_OPTION
    }
}
export const expandFilterGroup = (group) => {
    return {
        type: EXPAND_FILTER_GROUP,
        group
    }
}

export const addToSetlist = (song) => {
    console.log(ADD_TO_SETLIST)
    const  { setlist } = store.getState() // contains previous state
    const idx = setlist.findIndex(s => {
        return s.id === song.id
    })
    console.log(idx)
    if (idx === -1) {
        return {
            type: ADD_TO_SETLIST,
            song
        }
    } else {
        console.log('This song was already added')
        return {
            type: 'NO ACTION ADDED'
        }
    }
}

export const removeFromSetlist = (song) => {
    return {
        type: REMOVE_FROM_SETLIST,
        song
    }
}

/*
 * action types
 */


 
// export const ADD_TODO = 'ADD_TODO'
// export const TOGGLE_TODO = 'TOGGLE_TODO'
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// /*
//  * other constants
//  */

// export const VisibilityFilters = {
//     SHOW_ALL: 'SHOW_ALL',
//     SHOW_COMPLETED: 'SHOW_COMPLETED',
//     SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

// /*
//  * action creators
//  */

// export function addTodo(text) {
//     return { type: ADD_TODO, text }
// }

// export function toggleTodo(index) {
//     return { type: TOGGLE_TODO, index }
// }

// export function setVisibilityFilter(filter) {
//     return { type: SET_VISIBILITY_FILTER, filter }
// }