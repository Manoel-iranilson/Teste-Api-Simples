import React, { useEffect, useState } from "react";
import { Text, View, FlatList, ActivityIndicator } from "react-native";

// import { Container } from './styles';
import api from "../../services/api";
import Filmes from "../Filmes";
import { TitleText, TitleView } from "./styles";

export interface IFilmes {
  id: Number;
  nome: string;
  sinopse: string;
  foto: string;
}

const Index: React.FC = () => {
  const [filmes, setFilmes] = useState<IFilmes[]>([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    async function ApiGet() {
      const response = await api.get("r-api/?api=filmes");
      setFilmes(response.data);
      setLoad(true);
    }
    ApiGet();
  }, []);

  return (
    <View>
      {!load ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator color="#ff0000" size={24} />
        </View>
      ) : (
        <>
          <TitleView>
            <TitleText>FILMES</TitleText>
          </TitleView>
          <View>
            <FlatList
              data={filmes}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item, index }) => (
                <Filmes key={index} data={item} />
              )}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Index;
