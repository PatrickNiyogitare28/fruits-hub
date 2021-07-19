import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboard from '../screens/onboard';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Onboard} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
  
}

export default MyStack;