import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Light } from './theme';
import { I18nextProvider } from 'react-i18next';
import i18n from './translations';
import { RootNavigation } from './navigation';

const App: FC = () => {
  return (
    <ThemeProvider theme={Light}>
      <I18nextProvider i18n={i18n}>
        <RootNavigation />
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;
