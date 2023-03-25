import { useEffect } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import { styles, colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';


interface Props extends DrawerScreenProps< any, any >{};

export const Pagina1Screen = ({ navigation }: Props) => {

    // Ya ya la funcionalidad del Toggle viene implementada por defecto en el Drawer.Navigator
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    style={{
                        marginLeft: 10
                    }}
                    onPress={ () => navigation.toggleDrawer()  }
                >
                    <Text>Menú</Text>
                    <Icon 
                        name="menu-outline"
                        color={ colores.primary }
                        size={ 35 }
                    />
                </TouchableOpacity>
            )
        })
    }, []);


    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina1Screen</Text>

            <Button 
                title='Ir a la página 2'
                onPress={ () => navigation.navigate( 'Pagina2Screen' ) }
            />
            
            <Text style={{ 
                marginVertical: 20,
                fontSize: 20,
             }}> Navegar con argumentos
            </Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{ 
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6'
                    }}
                    onPress={ () => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro'
                    }) }
                >
                    <Icon 
                        name="body-outline"
                        color="white"
                        size={ 35 }
                    />
                    <Text style={ styles.botonGrandeTexto }>Pedro</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={{ 
                        ...styles.botonGrande,
                        backgroundColor: '#FF9427'
                    }}
                    onPress={ () => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Maria'
                    }) }
                >
                    <Icon 
                        name="woman-outline"
                        color="white"
                        size={ 35 }
                    />
                    <Text style={ styles.botonGrandeTexto }>Maria</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}
