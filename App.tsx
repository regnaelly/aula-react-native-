import { StatusBar } from 'expo-status-bar';

import './global.css';
import { LoginScreen } from '@/screens/logins';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Soma } from '@/screens/soma';
import { ListaScreen } from '@/screens/lista';
import { TelaSoma } from '@/screens/TelaSoma';
import { TelaContador } from '@/screens/TelaContador';

export default function App() {
  return (
    <>
      <SafeAreaView className="flex-1">
        {/* <LoginScreen/> */}
        {/* <Soma /> */}
        {/* <ListaScreen/> */}
        {/* <TelaSoma /> */}
        <TelaContador />
      </SafeAreaView>

      <StatusBar style="auto" />
    </>
  );
}
