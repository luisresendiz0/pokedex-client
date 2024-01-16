import axios from "axios";

interface Response<T> {
  success: boolean;
  message: string;
  data: T
};

const getPokemons = async <T>(search: string, limit: number, page: number) => {
  const url = import.meta.env.VITE_API_URL;
  const data = await axios<Response<T[]>>(`${url}/pokemons?search=${search}&limit=${limit}&page=${page}`);
  return data.data;
};

export default getPokemons;