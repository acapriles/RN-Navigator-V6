import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';

const theme = {
	...DefaultTheme,
	colors: {
	  ...DefaultTheme.colors,
	  primary: 'tomato',
	  secondary: 'yellow',
	},
};
  
const App = () => {
	return (
		<PaperProvider theme={theme}>
			<NavigationContainer>
				{/* <StackNavigator /> */}
				{/* <MenuLateralBasico /> */}
				<MenuLateral />
			</NavigationContainer>
		</PaperProvider>
	)
}

export default App;