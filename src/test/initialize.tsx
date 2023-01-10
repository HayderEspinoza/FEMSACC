import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Light } from '../theme';

export const StyledWrapper = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={Light}>{children}</ThemeProvider>;
};
