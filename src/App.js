import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import Header from './components/header/Header'
import Navbar from './components/header/Navbar';
import Views from './components/contents/Views'; 
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <AppProvider i18n={enTranslations}>
        <Header />
        <Navbar />
        {console.log(store.getState())}
        <Views />
      </AppProvider>
    </Provider>
  );
}

export default App;
