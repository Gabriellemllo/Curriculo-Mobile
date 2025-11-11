import { Tabs } from 'expo-router';
import { Home, User, GraduationCap, Briefcase, Code } from 'lucide-react-native';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#96a5f9',
        tabBarStyle: { backgroundColor: '#181B20' },
        headerShown: false,
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Início', 
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} /> 
        }} 
      />
      <Tabs.Screen 
        name="sobre" 
        options={{ 
          title: 'Sobre', 
          tabBarIcon: ({ color, size }) => <User color={color} size={size} /> 
        }} 
      />
      <Tabs.Screen 
        name="experiencia_academica" 
        options={{ 
          title: 'Acadêmico', 
          tabBarIcon: ({ color, size }) => <GraduationCap color={color} size={size} /> 
        }} 
      />
      <Tabs.Screen 
        name="experiencia_profissional" 
        options={{ 
          title: 'Profissional', 
          tabBarIcon: ({ color, size }) => <Briefcase color={color} size={size} /> 
        }} 
      />
      <Tabs.Screen 
        name="projetos" 
        options={{ 
          title: 'Projetos', 
          tabBarIcon: ({ color, size }) => <Code color={color} size={size} /> 
        }} 
      />
    </Tabs>
  );
}
