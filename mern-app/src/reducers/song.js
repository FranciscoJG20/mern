import { ADD_SONG} from '../constants/song';
import { DELETE_SONG} from '../constants/song';
import { UPDATE_SONG } from '../constants/song';


const DEFAULT_STATE = {
    songs: []
}


export default function songHandler(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case ADD_SONG:
        return {
            ...state,
            songs: [...state.songs, action.payload]
        };
        case DELETE_SONG:
        return {
            ...state,
            songs: state.songs.filter((song, id) => {
                return id !== action.payload;
            })
        };
        case UPDATE_SONG:
        return {
            ...state,
            songs: state.songs.map((song, index) => {
                if(index != action.payload.id) return order;

                return {
                    ...song,
                    ...action.payload.updatedSong
                }
            })
        }

        default: 
        return state;
    }
}