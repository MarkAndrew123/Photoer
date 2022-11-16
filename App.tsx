import { NavigationContainer } from '@react-navigation/native';
import { StatusBar , View} from 'react-native';
import Navigation from './src/navigation/Navigation';

const App = () => {
  return(
  <View style={{flex: 1}} >
    <NavigationContainer>
       <Navigation />
    </NavigationContainer>
    <StatusBar barStyle='light-content' /> 
  </View>





  )}
;
export default App;