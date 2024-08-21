import { Link } from "expo-router";
import { View,Text, StatusBar } from "react-native";
import StyledImg from "../components/styled-image";

export default function Home()
{
    return (
    <View>
      <StyledImg/>
      <Link href='/'>Voltar para Home</Link>
      <StatusBar/>
    </View>
  );
}