
import './App.css';
import React from 'react'
import '@aws-amplify/ui-react/styles.css'
import { View, Text, TextField} from '@aws-amplify/ui-react';




export function App() {

  return (

      <View>
        <Text variation='primary'>amplify textfield date</Text>
        <TextField type='date' label=''></TextField>

        <Text>html input date</Text>
        <input type='date'></input>              

      </View>

  );

}

export default App