import { FC } from "react";
import { Pokemon } from "../types/api/Pokemon";
import { Document, Image, Page, Text, View } from "@react-pdf/renderer";

const PokemonPDF: FC<{ pokemon: Pokemon}> = ({pokemon}) => {

  return (
    <Document>
      <Page>
        <View>
          <Image src={pokemon.sprites.front_shiny} style={{ width: 300, textAlign: "center" }} />
          <Text style={{ textAlign: "center"}}>{pokemon.name}</Text>
        </View>
      </Page>
    </Document>
  )
};

export default PokemonPDF;