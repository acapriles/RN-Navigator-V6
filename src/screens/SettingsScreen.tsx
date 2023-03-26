import { useContext } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles, colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {

    const { authState } = useContext( AuthContext );    

    // Hook para no usar el <SafeAreaView> </SafeAreaView> 
    const insets = useSafeAreaInsets();

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: insets.top + 20
        }}>
            <Text style={ styles.title }>SettingsScreen</Text>

            <Text>{ JSON.stringify( authState, null, 4 ) }</Text>

            {
                authState.favoriteIcon && (
                    <Icon
                        name={ authState.favoriteIcon }
                        size={ 150 }
                        color={ colores.primary }
                    />
                )
            }

        </View>
    )
}
