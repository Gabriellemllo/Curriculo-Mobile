import { SafeAreaView, ScrollView, View, Text, Image } from 'react-native';
import { globalStyles } from './globalStyles';

export default function SobreScreen() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', padding: 20 }}>
        <Text style={globalStyles.title}>Sobre Mim</Text>
        <Text style={globalStyles.subtext}>
          Movida pela curiosidade e pelo desejo constante de aprender, busco construir uma carreira sólida e de impacto nas áreas de Tecnologia e Gestão. Minha visão futura inclui a atuação com Dados e a exploração da Inteligência Artificial, um campo que me intriga bastante. No momento, meus principais focos de interesse são Back-end e Dados.
        </Text>
        <Text style={[globalStyles.title, { fontSize: 18 }]}>
          O que foi usado para a criação desse Portifólio?
        </Text>
        <View style={globalStyles.iconsRow}>
          
          <View style={globalStyles.iconCircle}>
            <Image source={require('../assets/images/figma.png')} style={globalStyles.iconImage} />
          </View>
          <View style={globalStyles.iconCircle}>
            <Image source={require('../assets/images/react.png')} style={globalStyles.iconImage} />
          </View>
          <View style={globalStyles.iconCircle}>
            <Image source={require('../assets/images/lucide.png')} style={globalStyles.iconImage} />
          </View>
          <View style={globalStyles.iconCircle}>
            <Image source={require('../assets/images/expo.png')} style={globalStyles.iconImage} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
