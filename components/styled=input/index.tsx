import  { TextInput, StyleSheet} from "react-native"

//Criando interface
interface StyledInputProps{
    placeholder: string
    onChangeText: (text: string) => void //function para o state
}

//Componente input puxando a interface 
export default function StyledInput
({placeholder, onChangeText}:StyledInputProps){
    return(
        <TextInput 
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}/>
    )
}

//Criando style do componente
const styles = StyleSheet.create({
    //Criando uma classe com o nome input p/ configurar
    input:{
        width:'90%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor:"#fff"
    }
})