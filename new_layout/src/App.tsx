import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import  theme  from '@themes/2021'
import Header from '@components/Header'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <Header/>
          <Button variant="contained">Default</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
