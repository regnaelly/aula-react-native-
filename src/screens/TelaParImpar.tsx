import { ButtonCustomizado } from "@/components/botaoCustomizado";
import { InputCustomizado } from "@/components/inputCustomizado";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";


export function TelaParImpar() {
    const[numero, setNumero] = useState('');
     const[resultado, setResultado] = useState('');

     function verificarParImpar() {
        const num = Number(numero);
        if(isNaN(num)) {
            setResultado('por favor insira um numero valido');
            return;
        }
        if (num % 2 === 0){
            setResultado("numero é par");
        } 
        else {
            setResultado("numero é impar");
        }
     }
     useEffect(() => {
        setResultado ("");
     }, [numero]);
  return (
    <View className="flex-1 items-center justify-center">
        <View className="w-full items-center justify-center gap-5 p-5">
            <Text className="text-black 2xl" > Tela Par ou Impar </Text> 
            <InputCustomizado placeholder="digite um número" value={numero} keyboardType="numeric" onChangeText={setNumero}/>
            <ButtonCustomizado title="verificar" onPress={verificarParImpar}/>
            <Text className="text-black 2xl"> {resultado} </Text>
        </View>
    </View>
  );
}
