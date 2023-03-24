import { useWindowDimensions, View, Image, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerType: ( width >= 568 ) ? 'permanent' : 'front'
                
            }}
            drawerContent={(props) => <CustomDrawerContent { ...props } />}
        >
            <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
            <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
        </Drawer.Navigator>
    );
}

const CustomDrawerContent = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>

            {/* Parte del avatar */}
            <View style={ styles.avatarContainer }>
                <Image 
                    source={{
                        uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif'
                    }}
                    style={ styles.avatar }
                />
            </View>


            {/* Opciones de Menú */}
            <View style={ styles.menuContainer }>

                <TouchableOpacity 
                    style={{ 
                        ...styles.menuBoton,
                        flexDirection: 'row'
                    }}
                    onPress={ () => navigation.navigate('StackNavigator') }
                >
                    {/* <Icon name="compass-outline" size={ 23 } color="black" /> */}
                    <Text style={ styles.menuTexto }> Navegacion</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{ 
                        ...styles.menuBoton,
                        flexDirection: 'row'
                    }}
                    onPress={ () => navigation.navigate('SettingsScreen') }
                >
                    {/* <Icon name="cog-outline" size={ 23 } color="black" /> */}
                    <Text style={ styles.menuTexto }> Ajustes</Text>
                </TouchableOpacity>

            </View>

        </DrawerContentScrollView>
    );
 }
  
  