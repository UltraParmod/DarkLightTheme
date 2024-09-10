import * as React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './src/screens/ProfileScreen';
import { lighTheme } from './src/theme/lightTheme';
import { darkTheme } from './src/theme/darkTheme';
import SettingScreen from './src/screens/SettingScreen';
import OnboardingScreen from './src/components/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Stack = createNativeStackNavigator();

function App() {
  const scheme = useColorScheme();
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
 
  React.useEffect(() => {
    const checkIfFirstLaunch = async () => {
      try {
        const hasViewedOnboarding =  AsyncStorage.getItem('hasViewedOnboarding');
        if (hasViewedOnboarding === null) {
          // First time user
          setIsFirstLaunch(true);
        } else {
          // User has already seen the onboarding
          setIsFirstLaunch(false);
        }
      } catch (error) {
        console.error('Error checking AsyncStorageawait', error);
      }
    };

    checkIfFirstLaunch();
  }, []);

  if (isFirstLaunch === null) {
    // Optionally return a loading screen or a splash screen here
    return null;
  }
  return (
    <NavigationContainer theme={scheme === 'dark' ? darkTheme : lighTheme}>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        {
          isFirstLaunch  &&
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        }
        <Stack.Screen name="PROFILE_SCREEN" component={ProfileScreen} />
        <Stack.Screen name="SETTING_SCREEN" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;