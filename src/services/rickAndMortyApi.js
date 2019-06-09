export const getCharacters = ()=>{
  return fetch('https://rickandmortyapi.com/api/character/')
    .then(res=>([res.ok, res.json()]))
    .then(([ok, json])=>{
      if(!ok) throw 'unable to get characters';
      return json;
    });
}
;
