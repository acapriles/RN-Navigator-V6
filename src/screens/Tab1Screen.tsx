import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles, colores } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const Tab1Screen = () => {

    const { top } = useSafeAreaInsets();
    
    return (
        <View style={{ ...styles.globalMargin, marginTop: top }}>
            <Text style={ styles.title }> Icons </Text>

            <Icon name="airplane-outline" size={80} color={ colores.primary } />
        </View>
    )
}
