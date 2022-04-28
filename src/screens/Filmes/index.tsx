import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import Sinopse from "../Sinopse";
import { Btn, BtnView, Container, Foto, NomeText, NomeView } from "./styles";
import { IFilmes } from "../Home/";

interface IIFilmes {
  data: IFilmes;
}

const Filmes: React.FC<IIFilmes> = ({ data }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <NomeView>
        <NomeText>{data.nome}</NomeText>
      </NomeView>
      <Foto>
        <Image source={{ uri: data.foto }} style={{ height: 200 }} />
      </Foto>
      <BtnView>
        <View style={{ marginRight: 10 }}>
          <Btn onPress={() => setVisible(true)}>
            <Text style={{ color: "white" }}>Sinopse</Text>
          </Btn>
        </View>
        <Sinopse
          nome={data.nome}
          onClose={() => setVisible(false)}
          sinopse={data.sinopse}
          visible={visible}
        />
        <Btn>
          <Text style={{ color: "white" }}>Assistir</Text>
        </Btn>
      </BtnView>
    </Container>
  );
};

export default Filmes;
