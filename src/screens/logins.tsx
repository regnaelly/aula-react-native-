import { InputCustomizado } from "@/components/inputCustomizado";
import { ButtonCustomizado } from "@/components/botaoCustomizado";

import { Text, View } from "react-native";

export function LoginScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-indigo-500">
            <View className="w-full p-5 gap-5 items-center bg-purple-200 ">
                <Text className="text-3xl">Nosso app</Text>
                <InputCustomizado placeholder={"login"} />
                <InputCustomizado placeholder="senha" />     

                <ButtonCustomizado title="entrar" />   
                <Text className="text-blue-950">Esqueceu a Senha?</Text> 
            </View>
        </View>
    )
}