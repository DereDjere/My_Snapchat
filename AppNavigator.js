import { createStackNavigator } from 'react-navigation';
import App from './App';
import Register from './Register';

const AppNavigator = createStackNavigator({
  App: { screen: App },
  Register: { screen: Register },
});