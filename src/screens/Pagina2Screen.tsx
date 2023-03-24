import { useNavigation } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';

const options: StackNavigationOptions = {
    title: 'Hola mundo',
    headerBackTitle: 'Atras',
};

export const Pagina2Screen = () => {

    const navigator = useNavigation<any>();

    useEffect(() => {
        navigator.setOptions(options);
    }, []);
    

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina2Screen</Text>

            <Button 
                title="Ir página 3"
                onPress={ () => navigator.navigate('Pagina3Screen')  }
            />
        </View>
    )
}
