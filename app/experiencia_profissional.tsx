import { useState } from 'react'; 
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native'; 
import { globalStyles } from '../components/globalStyles';

const data = [
  {
    id: 1,
    title: 'Hackathon Campus Party 2024',
    subtitle: 'Hackathon Correios',
    image: require('../assets/images/correios.png'),
    description: 'Participei do hackathon dos Correios na Campus Party 2024 como Gerente de Projetos, Designer e QA. Criamos a ideia de um totem personalizado para o desafio.',
  },
  {
    id: 2,
    title: 'Hackathon Curso Start',
    subtitle: 'Meu Pet',
    image: require('../assets/images/hackathonstart.png'),
    description: 'Participei do hackathon de conclusão do curso Start, onde tive uma experiência multifuncional como Gerente de Projetos, Designer e Desenvolvedor. Além de programar e liderar a equipe, o projeto foi crucial para expandir meu conhecimento em design web e programação.',
  },
  {
    id: 3,
    title: 'Nasa Space Apps Challenge 2024',
    subtitle: 'ExoRecife',
    image: require('../assets/images/nasaspace.png'),
    description: 'Participei de um projeto na área de Design, e nosso propósito era criar uma interface para aproximar as pessoas dos exoplanetas. O projeto foi classificado em 4º lugar e tive a oportunidade de disputar o mundial',
  },
];

export default function ExperienciaProfissional() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const { width: windowWidth } = useWindowDimensions();

  const CARD_WIDTH = Math.min(windowWidth * 0.9, 450); 
  const CARD_HEIGHT = CARD_WIDTH * 0.66; 

  const handleToggleDescription = (id: number) => {
    setExpandedId(id === expandedId ? null : id);
  };

  return (
    <SafeAreaView style={globalStyles.safeAreaContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContentContainer}>
        <Text style={[globalStyles.title, { marginBottom: 32 }]}>Experiência{'\n'}Profissional</Text>
        
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