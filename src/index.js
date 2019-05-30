import { createStore, applyMiddleware  } from 'redux';

function reducer(state = {}, action){
  switch(action.type){
    default:
      return state;
  }
}

const logger = store => next => action => {
  console.log('im middleware', action);
  next(action);
};


const store = createStore(
  reducer,
  applyMiddleware(logger)
);

store.dispatch({ type:'hi' });
