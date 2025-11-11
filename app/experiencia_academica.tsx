import { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native'; 
import { globalStyles } from '../components/globalStyles';

const data = [
  {
    id: 1,
    title: 'Site Diogo Defante',
    subtitle: 'Site Diogo Defante',
    image: require('../assets/images/defante.png'),
    description: 'Site criado mostrando um pouco a biografia e a carreira profissional do Diogo Defante. Onde você encontra tudo sobre ele: uma biografia resumida, o link direto pro Spotify, os vídeos mais insanos do YouTube, além das redes sociais e uma seção com a agenda de eventos.',
  },
  {
    id: 2,
    title: 'Conecta Maré',
    subtitle: 'App Conecta Maré',
    image: require('../assets/images/conectamare.png'),
    description: 'Conecta Maré é um projeto voltado ao monitoramento do aumento do nível da maré em áreas de risco. A iniciativa oferece informações em tempo real sobre os pontos seguros e abrigos disponíveis, além de indicar com quem entrar em contato caso a residência seja invadida pela água.',
  },
  {
    id: 3,
    title: 'Luminelli',
    subtitle: 'Site Luminelli',
    image: require('../assets/images/luminelli.png'),
    description: 'Luminelli é um aplicativo inovador que une tecnologia, sustentabilidade e respeito à arquitetura local para transformar pontos estratégicos da cidade do Recife. Nosso objetivo é urbanizar de forma consciente, com foco na melhoria da qualidade do ar, promovendo bem-estar para a população sem comprometer o patrimônio histórico ou visual da cidade.',
  },
];


export default function ExperienciaAcademica() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const { width: windowWidth } = useWindowDimensions();
  
  const CARD_WIDTH = Math.min(windowWidth * 0.9, 450); 
  const CARD_HEIGHT = CARD_WIDTH * 0.66; 

  const handleToggleDescription = (id: number) => {
    setExpandedId(id === expandedId ? null : id);
  };

  return (
    <SafeAreaView style={globalStyles.safeAreaContainer}> // Linha 41
      <ScrollView contentContainerStyle={globalStyles.scrollContentContainer}> // Linha 42
        
        <Text style={[globalStyles.title, { marginBottom: 32 }]}>Experiência{'\n'}Acadêmica</Text>
        
        {data.map((item) => (
          <View key={item.id} style={[globalStyles.listItemContainer, { width: CARD_WIDTH }]}>
            <TouchableOpacity
              activeOpacity={0.86}
              onPress={() => handleToggleDescription(item.id)}
              style={globalStyles.carouselCard} 
            >
              <Image
                source={item.image}
                style={[
                  globalStyles.carouselImage, 
                  { width: CARD_WIDTH, height: CARD_HEIGHT }
                ]}
                resizeMode="cover"
              />
              <View style={[globalStyles.carouselTextContainer, { width: '100%' }]}>
                  <Text style={globalStyles.carouselTitle}>{item.title}</Text>
                  <Text style={globalStyles.carouselSubtitle}>{item.subtitle}</Text>
              </View>
            </TouchableOpacity>

            {expandedId === item.id && (
              <View style={globalStyles.descBox}>
                <Text style={globalStyles.carouselDesc}>{item.description}</Text>
              </View>
            )}
          </View>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}