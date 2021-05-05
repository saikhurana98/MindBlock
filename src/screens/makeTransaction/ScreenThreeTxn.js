import React from 'react';
import { View } from 'react-native'
import Fingerprint from '../../components/Fingerprint/Application.container'

const FingerPrint = ({ navigation }) => {
    const [authenticated, setAuthenticated] = React.useState(false);
    const onPopUpDismissed = () => {
        setAuthenticated(!authenticated);
        navigation.navigate("@ScreenFour");
    }
    return (
        <View style={{ flex: 1 }}>
            <Fingerprint popUpDismssed={onPopUpDismissed} />
        </View>
    )
}

export default FingerPrint;
