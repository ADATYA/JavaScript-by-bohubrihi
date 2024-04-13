import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen';
import BookListScreen from './BookListScreen';
import BookDetailsScreen from './BookDetailsScreen';

const Stack = createStackNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="BookList" component={BookListScreen} />
            <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
