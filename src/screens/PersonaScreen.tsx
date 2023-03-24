import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackNavigationOptions, StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';
import { RootStackParams } from '../navigator/StackNavigator';

// Forma 1 de tipar los params (No tan correcta)
/*
interface RouterParams {
    id: number;
    nombre: string;
}; 

interface Props extends StackScreenProps< any, any >{};
*/

// Forma 2 de tipar los params (Totalmente correcta).
// RootStackParams debe ser creado en el archi de creación del Stack
interface Props extends StackScreenProps< RootStackParams, 'PersonaScreen' >{};

export const PersonaScreen = ( { route, navigation }: Props ) => {

    // Forma 1 de tipar los params (No tan correcta)
    // const params = route.params as RouterParams;
    
    
    const params = route.params;

    const options: StackNavigationOptions = {
        // Forma 1 de tipar los params (No tan correcta)
        // title: params!.nombre,

        title: params.nombre,
    };

    useEffect(() => {
        navigation.setOptions(options);
    }, []);
    

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>
                {
                    JSON.stringify( params, null, 3 )
                }
            </Text>
        </View>
    )
}
