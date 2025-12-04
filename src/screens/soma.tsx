import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useState, useEffect} from 'react';
import { View, Text } from 'react-native';

export function Soma() {

    const[valor1, setValor1] = useState('');
    const[valor2, setValor2] = useState('');
    const[resultado, setResultado] = useState(0);
    
    useEffect(() => {
      setResultado(0);
    }, [valor1, valor2]);
   
    function Somar() {
      const soma = Number(valor1) + Number(valor2);
      setResultado(soma);
    }
  return (
    <View className="flex-1 items-center justify-center">
    <View className='w-full p-5 gap-4 items-center'>

      <InputCustomizado keyboardType="numeric" placeholder={"valor1"} 
      onChangeText={setValor1}/>

      <InputCustomizado keyboardType="numeric" placeholder={"valor2"} 
      onChangeText={setValor2}/>

      <ButtonCustomizado title="resultado" onPress={Somar}/> 

      <Text className='text-2xl text-black'> Resultado: {resultado}</Text>
      </View>
      </View>
  );
}
