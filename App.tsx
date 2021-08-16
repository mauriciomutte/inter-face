import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './src/screens/Home';

export default function App() {
  return (
    <PaperProvider>
      <HomeScreen />
      <StatusBar style="auto" hidden={false} />
    </PaperProvider>
  );
}
