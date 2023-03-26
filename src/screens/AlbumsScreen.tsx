import { Text, View, Button } from 'react-native'
import { styles } from '../theme/appTheme';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {

    const { authState: { isLoggedIn }, logout } = useContext( AuthContext );

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>AlbumsScreen</Text>

            {
                isLoggedIn && <Button title="Logout" onPress={ logout } />
            }
        </View>
    )
}