import { FC, useRef } from "react";
import { Pokemon } from "../types/api/Pokemon";
import capitalizeEachWord from "../utlis/capitalizeEachWord";
import getRandomBadgeColor from "../utlis/getRandomBadgeColor";
import PokemonPDF from "./PokemonPDF";
import { PDFDownloadLink } from "@react-pdf/renderer";

interface RenderListProps {
  list: Pokemon[]
};

const RenderList: FC<RenderListProps> = (props) => {

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Pokemon</th>
            <th>Abilities</th>
            <th>Types</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {props.list.map(pokemon => (
            <tr key={pokemon.id}>
              <th>{pokemon.id}</th>
              <th>
                <div className="flex items-center space-x-4">
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>
                  </div>
                  <div>
                    <p>{capitalizeEachWord(pokemon.name)}</p>
                    <p className="font-normal">⭐ XP: {pokemon.base_experience}</p>
                  </div>
                </div>
              </th>
              <td>
                <div className="space-x-2">
                  {pokemon.abilities.map(ability => (
                    <div key={ability.ability.name} className={`badge ${getRandomBadgeColor()} badge-outline`}>{ability.ability.name}</div>
                  ))}
                </div>
              </td>
              <td>
                <div>
                  {pokemon.types.map(type => (
                    <div key={type.type.name} className="badge">{type.type.name}</div>
                  ))}
                </div>
              </td>
              <td>
                  
                <PDFDownloadLink document={<PokemonPDF pokemon={pokemon} />} fileName={`${pokemon.name}.pdf`}>
                  {({blob, url, loading, error}) => loading ? "Loading document..." : "Download pdf"}
                </PDFDownloadLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default RenderList;