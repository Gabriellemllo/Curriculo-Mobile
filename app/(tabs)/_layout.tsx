import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Início" }} />
      <Tabs.Screen name="sobre" options={{ title: "Sobre" }} />
      <Tabs.Screen name="experiencia_academica" options={{ title: "Acad" }} />
      <Tabs.Screen name="experiencia_profissional" options={{ title: "Profiss." }} />
      <Tabs.Screen name="projetos" options={{ title: "Projetos" }} />
    </Tabs>
  );
}
