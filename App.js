import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Frontend/screens/HomeScreen';
import WinterScreen from './Frontend/screens/WinterScreen';
import SummerScreen from './Frontend/screens/SummerScreen';
import PerfumesScreen from './Frontend/screens/PerfumesScreen';
import SaleScreen from './Frontend/screens/SaleScreen';
import WinterSubScreen from './Frontend/screens/WinterSubScreen';
import SummerSubScreen from './Frontend/screens/SummerSubScreen';
import PerfumesSubScreen from './Frontend/screens/PerfumesSubScreen';

const Stack = createNativeStackNavigator();

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#EF4444',
    background: '#111827',
    card: '#1F2937',
    text: '#F3F4F6',
    border: '#374151',
    notification: '#EF4444',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={CustomTheme}>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1F2937',
          },
          headerTintColor: '#F3F4F6',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: '#111827',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Winter" 
          component={WinterScreen} 
          options={{ 
            title: 'Winter Collection',
            headerTintColor: '#3B82F6'
          }} 
        />
        <Stack.Screen 
          name="Summer" 
          component={SummerScreen} 
          options={{ 
            title: 'Summer Collection',
            headerTintColor: '#F59E0B'
          }} 
        />
        <Stack.Screen 
          name="Perfumes" 
          component={PerfumesScreen} 
          options={{ 
            title: 'Fragrances',
            headerTintColor: '#EC4899'
          }} 
        />
        <Stack.Screen 
          name="Sale" 
          component={SaleScreen} 
          options={{ 
            title: 'Flash Sale',
            headerTintColor: '#EF4444'
          }} 
        />
        <Stack.Screen 
          name="WinterSub" 
          component={WinterSubScreen} 
          options={({ route }) => ({ 
            title: route.params?.type || 'Winter',
            headerTintColor: '#3B82F6'
          })} 
        />
        <Stack.Screen 
          name="SummerSub" 
          component={SummerSubScreen} 
          options={({ route }) => ({ 
            title: route.params?.type || 'Summer', 
            headerTintColor: '#F59E0B'
          })} 
        />
        <Stack.Screen 
          name="PerfumesSub" 
          component={PerfumesSubScreen} 
          options={({ route }) => ({ 
            title: route.params?.type || 'Perfumes',
            headerTintColor: '#EC4899'
          })} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}