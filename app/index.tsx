import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { globalStyles } from '../app/globalStyles';

export default function HomeScreen() {
  
  const whatsappNumber = "5581991570131";
  const message = "Olá Gabi , gostaria de conversar sobre novos projetos!";
  const linkedinUrl = "https://www.linkedin.com/in/gabriellemelo07";
  const githubUrl = "https://github.com/Gabriellemllo";

  
  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    Linking.openURL(url);
  };
  
  const openLinkedIn = () => {
    Linking.openURL(linkedinUrl);
  };

  const openGitHub = () => {
    Linking.openURL(githubUrl);
  };
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#04052B' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 50, paddingBottom: 80 }}>
        <Text style={globalStyles.title}>
          Olá, Seja Bem vindo(a){'\n'}Meu nome é Gabrielle!
        </Text>
        <Text style={globalStyles.subtitle}>
          Desenvolvedora Full-stack
        </Text>
        
        <View style={globalStyles.iconsRow}>
          <TouchableOpacity style={globalStyles.iconCircle} onPress={openLinkedIn}>
            <Image source={require('../assets/images/linkedin.png')} style={{ width: 28, height: 28 }} />
          </TouchableOpacity>
          
          <TouchableOpacity style={globalStyles.iconCircle} onPress={openGitHub}>
            <Image source={require('../assets/images/github.png')} style={{ width: 28, height: 28 }} />
          </TouchableOpacity>
        </View>
        
        <Image 
          source={require('../assets/images/eu.png')} 
          style={{ width: 420, height: 420, borderRadius: 210, marginBottom: 20 }} 
        />
        
        <TouchableOpacity onPress={openWhatsApp} style={[globalStyles.button, { marginBottom: 20 }]}>
          <Text style={globalStyles.buttonText}>Disponível para novos projetos</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}