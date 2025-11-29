import { Button, ButtonProps, TextInputProps, View } from 'react-native';

export function ButtonCustomizado({...rest}: ButtonProps) {
  return (
    <View className="text-4xl:ounded-2xl w-full">
      <Button 
        {...rest}
      />
    </View>
  );
}
