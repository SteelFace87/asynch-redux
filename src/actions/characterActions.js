import { getCharacters } from '../services/getCharacters';

export const GET_CHARACTERS = 'GET_CHARACTERS';

export const action_getCharacters = () => ({
  type: GET_CHARACTERS,
  payload: getCharacters()
});



export const action_getCharacters = () => dispatch => {
  return getCharacters()
    .then(results=>{
      dispatch({
        type: GET_CHARACTERS,
        payload: results
      });
    });
}
;

