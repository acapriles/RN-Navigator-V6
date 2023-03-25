import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { styles, colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';


export const Tabs = () => {

    return Platform.OS === 'ios'
        ? <TabsIOS />
        : <TabsAndroid />
};


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    const theme = useTheme();


    return (
        <BottomTabAndroid.Navigator
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: colores.primary }}
            screenOptions={ ({ route }) => ({
                
                tabBarIcon: ({ color }) => {
 
                    let iconName: string = '';
                    switch( route.name ) {
                        case 'Tab1Screen' :
                            iconName = 'bandage-outline'
                        break;
     
                        case 'Tab2Screen' :
                            iconName = 'basketball-outline'
                        break;
     
                        case 'StackNavigator' :
                            iconName = 'bookmarks-outline'
                        break;
                    }
                    return <Icon name={ iconName } size={20} color={ color } />
                }
            })}
        >
            <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
            <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'Tab2'}} component={ TopTabNavigator } />
            <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack'}} component={ StackNavigator } />
        </BottomTabAndroid.Navigator>
    );
}


const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            screenOptions={ ({ route }) => ({
                tabBarActiveTintColor: colores.primary,
                tabBarStyle: {
                    borderTopColor: colores.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15
                },
                tabBarIcon: ({ color, focused, size }) => {
 
                    let iconName: string = '';
                    switch( route.name ) {
                        case 'Tab1Screen' :
                            iconName = 'bandage-outline'
                        break;
     
                        case 'Tab2Screen' :
                            iconName = 'basketball-outline'
                        break;
     
                        case 'StackNavigator' :
                            iconName = 'bookmarks-outline'
                        break;
                    }
                    return <Icon name={ iconName } size={20} color={ color } />
                }
            })}
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            
        >
            {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: ( props ) => <Text style={{ color: props.color }}>T1</Text>}} component={ Tab1Screen } /> */}
            <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
            <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2'}} component={ TopTabNavigator } />
            <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack'}} component={ StackNavigator } />
        </BottomTabIOS.Navigator>
    );
}