import { GET_CHARACTERS } from '../actions/characterActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  console.log('action payload', action.payload);
  switch(action.type) {
    case GET_CHARACTERS:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
