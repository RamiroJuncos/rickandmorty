
export async function getChars(){
    let res = await fetch("https://rickandmortyapi.com/api/character");
    let data = await res.json();
    return data.results
}
