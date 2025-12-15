import { StatusBar } from 'expo-status-bar';

import './global.css';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TelaContador } from '@/screens/TelaContador';

export default function App() {
  return (
    <>
      <SafeAreaView className="flex-1">
        <TelaContador />
      </SafeAreaView>

      <StatusBar style="auto" />
    </>
  );
}
