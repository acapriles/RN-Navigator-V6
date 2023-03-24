import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                // drawerPosition: 'right',
                headerShown: false,
                /* drawerStyle: {
                    backgroundColor: '#c6cbef',
                    width: 240,
                }, */
                drawerType: ( width >= 568 ) ? 'permanent' : 'front'
            }}
        >
            <Drawer.Screen name="StackNavigator" options={{ title:'Home'}} component={ StackNavigator } />
            <Drawer.Screen name="SettingsScreen" options={{ title:'Settings'}} component={ SettingsScreen } />
        </Drawer.Navigator>
    );
}