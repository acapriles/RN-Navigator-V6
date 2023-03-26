import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';

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
				<AppState>
					{/* <StackNavigator /> */}
					{/* <MenuLateralBasico /> */}
					<MenuLateral />
				</AppState>
			</NavigationContainer>
		</PaperProvider>
	)
}

// export const AppState = ( { children }: any ) => { //Se puede usar "" any
export const AppState = ( { children }: { children: JSX.Element } ) => {
	return (
		<AuthProvider>
			{ children }
		</AuthProvider>
	)
}


export default App;