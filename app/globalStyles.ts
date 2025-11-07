import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04052B',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 96,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 5,
  },
  subtitle: {
    color: '#A2A6B0',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 32,
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
    marginVertical: 16,
  },
  iconCircle: {
    backgroundColor: '#26213C',
    borderRadius: 30,
    padding: 12,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: 500,         
    height: 500,
    borderRadius: 210,   
    marginTop: 24,
    marginBottom: 20, 
  },
  button: {
    position: 'absolute',
    bottom: 80,      
    left: '12.5%',   
    width: '75%',
    backgroundColor: '#02031C',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 35,
    alignItems: 'center',
    zIndex: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,         
    fontWeight: '600',
    textAlign: 'center'
  }
});
