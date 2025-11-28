import { Button, ButtonProps, TextInputProps } from 'react-native';

export function ButtonCustomizado({...rest}: ButtonProps) {
  return <Button 
      {...rest}
  />;
}
