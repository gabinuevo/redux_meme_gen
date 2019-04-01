import uuid from 'uuid/v4'

const INITIAL_STATE = { memes: [] };

function rootReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;

    if (type === "MAKE_MEME") {

        payload.id = uuid();
        return { memes: [...state.memes, payload] }
    } else if (type === "DELETE_MEME") {
        
        return { memes: state.filter((m) => m.id !== payload.id ) }
    } else {
        return {...state};
    }
}

export default rootReducer;
