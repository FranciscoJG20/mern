import { ADD_SONG } from '../constants/song';
import { DELETE_SONG } from '../constants/song';
import { UPDATE_SONG } from '../constants/song';

export function addSong(songName, length) {
    return {
        type: ADD_SONG,
        payload: {
            songName, 
            length,
        }
    }
}

export const deleteSong = id => ({type: DELETE_SONG, payload: id})

export const updateSong = (id, updatedSong) => ({
    type: UPDATE_SONG, 
    payload: {
        id, 
        updatedSong
    }
})