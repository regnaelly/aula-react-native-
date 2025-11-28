import { InputCustomizado } from "@/components/inputCustomizado";
import { ButtonCustomizado } from "@/components/botaoCustomizado";

import { Text, View } from "react-native";

export function LoginScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-indigo-500">
            <InputCustomizado placeholder={"login"} />
            <InputCustomizado placeholder="senha" />     

            <ButtonCustomizado title="entrar" />      
        </View>
    )
}