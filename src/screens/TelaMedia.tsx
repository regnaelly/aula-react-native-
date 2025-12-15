import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useState, useEffect} from 'react';
import { View, Text } from 'react-native';

export function TelaMedia() {

    const[valor1, setValor1] = useState('');
    const[valor2, setValor2] = useState('');
    const[calcular, setCalcular] = useState(0);
    
    useEffect(() => {
      setCalcular(0);
    }, [valor1, valor2]);
   
    function Media() {
      const media = (Number(valor1) + Number(valor2)) / 2;
      setCalcular(media);
    }
  return (
    <View className="flex-1 items-center justify-center">
    <View className="w-full items-center justify-center gap-5 p-5">
                    <Text className="text-4xl m-3">
                Tela de Média
            </Text> 

      <InputCustomizado keyboardType="numeric" placeholder={"valor1"} 
      onChangeText={setValor1}/>

      <InputCustomizado keyboardType="numeric" placeholder={"valor2"} 
      onChangeText={setValor2}/>

      <ButtonCustomizado title="calcular" onPress={Media}/> 

      <Text className='text-2xl text-black'> Resultado: {calcular}</Text>
      </View>
      </View>
  );
}