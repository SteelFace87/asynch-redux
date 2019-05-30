import { getCharacters } from '../services/rickAndMortyApi';
export const GET_CHARACTERS = 'GET_CHARACTERS';

export const rickAndMortyCharacters = () => ({
  type: GET_CHARACTERS,
  payload: getCharacters()
})
;
