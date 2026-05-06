import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import DetalhesScreen from './src/screens/Detalhes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Minhas Aulas' }}
        />

        <Stack.Screen
          name="Detalhes"
          component={DetalhesScreen}
          options={{ title: 'Conteúdo da Aula' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}