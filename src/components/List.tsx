import { useQuery } from "react-query";
import getPokemons from "../api/getPokemons";
import { useAtomValue } from "jotai";
import searchAtom from "../atoms/searchAtom";
import { useState } from "react";
import { Pokemon } from "../types/api/Pokemon";
import RenderList from "./RenderList";

const List = () => {
  const search = useAtomValue(searchAtom);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const query = useQuery({
    queryKey: ['pokemons', search, limit, page],
    queryFn: () => getPokemons<Pokemon>(search, limit, page)
  });

  if(query.isLoading) {
    return (
      <p>Is Loading...</p>
    )
  };

  if(query.error || query.data?.success === false) {
    return (
      <p>Error on getPokemons</p>
    )
  }

  if(!query.data) {
    return (
      <p>Empty data</p>
    )
  }

  return (
    <div>
      <div className="flex space-x-4 justify-center my-4 items-center">
        <button className="btn btn-neutral" onClick={() => setPage(p => p - 1)} disabled={page <= 1}>Prev page</button>
        <button className="btn btn-neutral" onClick={() => setPage(p => p + 1)}>Next page</button>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Limit</span>
          </div>
          <input type="number" placeholder="Limit" value={limit} onChange={(e) => setLimit(Number(e.target.value))} className="input input-bordered w-full max-w-xs" />
          <div className="label">
            <span className="label-text-alt">Enter a number between 1 and 1000</span>
          </div>
        </label>
      </div>
      {query.data.data.length > 0 ? (
        <RenderList list={query.data.data} />
      ) : (
        <div>
          <p>Empty list</p>
        </div>
      )}
    </div>
  )
};

export default List;