import React from 'react';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './src/screens/Home';

export default function App() {
  return (
    <>
      <HomeScreen />
      <StatusBar style="auto" hidden={false} />
    </>
  );
}
