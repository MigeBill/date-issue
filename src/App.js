
import './App.css';
import React from 'react'
import { ThemeProvider, defaultDarkModeOverride, Heading, Card, Text, TextField } from '@aws-amplify/ui-react';



export function App() {


  const theme = {
    name: 'dark-theme',
    overrides: [defaultDarkModeOverride],
  };




  return (


    <ThemeProvider theme={theme} colorMode='dark'>
      <Card>
        <Heading level={1}>Date field behaviour</Heading>
        <Text variation='error'>amplify textfield date</Text>
        <TextField type='date' label=''></TextField>

        <Text variation='warning'>html input date</Text>
        <input type='date'></input>
      </Card>
    </ThemeProvider>
  );

}

export default App