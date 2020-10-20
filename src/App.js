import React from 'react';
import './App.css';
import {AppProvider, Page, Card, Button} from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import Header from './components/header/Header'
import Navbar from './components/header/Navbar';
import Views from './components/contents/Views'; 
function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Header />
      <Navbar />
      <Views />
    </AppProvider>
  );
}

export default App;
