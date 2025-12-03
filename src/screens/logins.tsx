import { InputCustomizado } from "@/components/inputCustomizado";
import { ButtonCustomizado } from "@/components/botaoCustomizado";

import { Text, View } from "react-native";
import { useState } from "react";

export function LoginScreen() {
    const[login, setLogin] = useState("");
    const[senha, setSenha] = useState("");

    function logar() {
        console.log("login", login, "senha", senha)
    }

    console.log("login" , login);
    console.log("senha" , senha);
    return (
        <View className="flex-1 items-center justify-center bg-indigo-500">
            <View className="w-full p-5 gap-5 items-center bg-purple-200 ">
                <Text className="text-3xl">Nosso app</Text>

                <InputCustomizado placeholder={"login"}
                onChangeText={(text) => {setLogin(text)}}/>

                <InputCustomizado placeholder="senha"
                onChangeText={(text) => {setSenha(text)}} secureTextEntry={true}/>   


                <ButtonCustomizado title="entrar" onPress={()=> 
                    console.log("login", login, "senha", senha)}/>   
                <View className="flex-row items-center space-x-2 mt-2">
                    <Text className="text-blue-950">Esqueceu a Senha?     </Text>
                    <Text className="text-blue-950">|</Text>
                    <Text className="text-blue-950">     Cadastre-se</Text>
                </View>
            </View>
        </View>
    )
}