import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Route from './Route';

export const UserContext = React.createContext();

const App = () => {
  const [user, setUser] = useState<any>();

  console.log('user state', user);
  return (
    <SafeAreaProvider>
      <UserContext.Provider value={{user, setUser}}>
        <Route />
      </UserContext.Provider>
    </SafeAreaProvider>
  );
};

export default App;
