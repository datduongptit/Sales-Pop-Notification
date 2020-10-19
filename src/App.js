import React from 'react';
import './App.css';
import {AppProvider, Page, Card, Button} from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Page title="Example app">
        <Card sectioned>
          <Button onClick={() => alert('Button clicked!')}>Example button</Button>
        </Card>
      </Page>
    </AppProvider>
  );
}

export default App;
