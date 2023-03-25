import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';


const topTabNavigator = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const {top} = useSafeAreaInsets();

    return (
        <topTabNavigator.Navigator
            style={{paddingTop: top}}
            sceneContainerStyle={{backgroundColor: 'white'}}
            screenOptions={({route}) => ({
                tabBarStyle: {
                    backgroundColor: colores.primary,
                    shadowColor: 'transparent'
                },
                tabBarIndicatorStyle: {
                    backgroundColor: 'orange', 
                    height: 3
                },
                tabBarLabelStyle: {
                    fontSize: 12, 
                    color: 'white', 
                    fontWeight: 'bold',
                },
                tabBarPressColor: 'gray',
                tabBarIcon({ color }) {
            
                    let iconName: string = '';
                    switch( route.name ) {
                        case 'Chat':
                            iconName = 'chatbox-ellipses-outline'
                            break;
            
                        case 'Contacts':
                            iconName = 'people-outline'
                            break;
            
                        case 'Albums':
                            iconName = 'albums-outline'
                            break;
                    }
                    return <Icon name={ iconName } size={ 20 } color={ color } />
                },
            })}
        >
        <topTabNavigator.Screen name="Chat" component={ChatScreen} />
        <topTabNavigator.Screen name="Contacts" component={ContactsScreen} />
        <topTabNavigator.Screen name="Albums" component={AlbumsScreen} />
        </topTabNavigator.Navigator>
    );
}