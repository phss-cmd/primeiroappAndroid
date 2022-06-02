import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Dimensions,ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={estilo.container}>
      <Text style={estilo.titulo} >Jogos do Gameplay</Text>
      <StatusBar style="auto" />
      <Text style={estilo.titulo} >Minecraft</Text>
      <Image style={estilo.img} source={require("./assets/Minecraft_capa.png")} />
      <Text style={estilo.titulo} >Forza Horizon 5</Text>
      <Image style={estilo.img} source={require("./assets/Forza_Horizon_5.jpg")} />
    </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000814',
    alignItems: 'center',
    
  },
  titulo:{
    fontSize:40,
    marginTop:20,
    color:"#118ab2",
  },
  img:{
    width:200,
    height:300,
    borderRadius:10,
  }
});
