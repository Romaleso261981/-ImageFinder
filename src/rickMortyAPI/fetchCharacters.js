import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api/character";

export async function fetchCharacters(page) {
  const url = `?page=${page}`;

  const { data } = await axios.get(url);
  return data;
}

export async function fetchCharacterById(characterId) {
  const url = `/${characterId}`;

  const { data } = await axios.get(url);
  return data;
}

export async function fetchCharacterByName(characterName, page) {
  const url = `/?name=${characterName}&page=${page}`;

  const { data } = await axios.get(url);
  return data;
}
