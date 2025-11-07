import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#96a5f9',
        tabBarStyle: { backgroundColor: '#181B20' },
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Início', tabBarIcon: ({ color }) => <Feather name="home" size={22} color={color} /> }} />
      <Tabs.Screen name="sobre" options={{ title: 'Sobre', tabBarIcon: ({ color }) => <Feather name="user" size={22} color={color} /> }} />
      <Tabs.Screen name="experiencia-academica" options={{ title: 'Acadêmico', tabBarIcon: ({ color }) => <Feather name="book" size={22} color={color} /> }} />
      <Tabs.Screen name="experiencia-profissional" options={{ title: 'Profissional', tabBarIcon: ({ color }) => <Feather name="briefcase" size={22} color={color} /> }} />
      <Tabs.Screen name="projetos" options={{ title: 'Projetos', tabBarIcon: ({ color }) => <Feather name="layers" size={22} color={color} /> }} />
    </Tabs>
  );
}
