import { useState } from 'react'; 
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native'; 
import { globalStyles } from '../app/globalStyles';

const data = [
  {
    id: 1,
    title: 'Projeto Start',
    subtitle: 'Meu pet',
    image: require('../assets/images/meupet.png'),
     description: 'Meu Pet é uma solução tecnológica criada para castrar, mapear e cuidar de animais de rua, promovendo também a adoção responsável. O projeto atua em parceria com ONGs, clínicas veterinárias e empresas locais, ajudando a reduzir o número de animais abandonados e a sobrecarga das organizações de proteção animal, que muitas vezes enfrentam falta de recursos. ',
  },
  {
    id: 2,
    title: 'NasaSpaceApps',
    subtitle: 'ExoRecife',
    image: require('../assets/images/exorecife.png'),
    description: 'ExoRecife é um projeto desenvolvido para o NASA Space Apps Challenge 2024 - Recife, com o objetivo de aproximar estudantes dos mais de 5.500 exoplanetas catalogados no Arquivo de Exoplanetas da NASA. Inspirado na ideia de “viajar o mundo com a palma das mãos”, o projeto propõe uma experiência interativa e prática, tornando o universo mais acessível e estimulando o interesse pela ciência, astronomia e tecnologia.',
  },
  {
    id: 3,
    title: 'Campus Party',
    subtitle: 'Hackathon Correios',
    image: require('../assets/images/toten.png'),
    description: 'Criamos um totem inteligente para os Correios. Ele automatiza o cadastro por voz e a medição dos pacotes. Valida peso e dimensões com sensores e imagem. Agiliza o despacho e melhora o atendimento ao público.',
  },
];

export default function Projetos() {
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
        <Text style={[globalStyles.title, { marginBottom: 32 }]}>Projetos</Text>
        
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