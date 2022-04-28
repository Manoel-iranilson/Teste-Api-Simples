import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";

import { Container, Title } from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";

interface ISinopse {
  nome: string;
  sinopse: string;
  visible: boolean;
  onClose(): void;
}

const Sinopse: React.FC<ISinopse> = ({ nome, sinopse, visible, onClose }) => {
  return (
    <Modal transparent={true} animationType="slide" visible={visible}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            height: 215,
            width: 300,
            borderRadius: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => onClose()}>
              <AntDesign name="back" size={20} color="black" />
            </TouchableOpacity>
            <View style={{ marginLeft: 50 }}>
              <Title>{nome}</Title>
            </View>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ textAlign: "justify" }}>{sinopse}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Sinopse;
