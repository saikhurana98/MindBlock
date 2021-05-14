import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    moduleInfoNextButton: {
        alignSelf: 'center',
        top: windowHeight * 0.6
    },
    mainContainer: {
        flex: 1,
        backgroundColor: "#EDF1F9",
    },
    headingContainer: {
        alignSelf: 'center'
    },
    headingText: {
        fontFamily: "TitilliumWeb-SemiBold",
        color: "#0D1F3C",
        fontSize: 26,
    },
    descriptionContainer: {
        top: 10,
        width: windowHeight * 0.4,
        alignSelf: 'center'
    },
    descriptionText: {
        textAlign: 'center',
        fontFamily: "TitilliumWeb-Regular",
        color: "#485068",
        fontSize: 15,
    },
    wonderingImage: {
        justifyContent : 'center'
    }
});

export default styles;