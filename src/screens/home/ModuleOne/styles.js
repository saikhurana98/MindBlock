import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
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
    moduleInfoNextButton: {
        alignSelf: 'center',
        // bottom: 100,
        flex: 1,
    },
    wonderingImage: {
        flex: 3,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    privacyImage: {
        flex: 2,
        justifyContent: 'center',
        top: 50,
        flexDirection: 'row'
    },
    addressCard: {
        flex: -2,
        bottom: 20,
        // top: 80,
        // width: 100,
        borderRadius: 20,
        height: 200,
        padding: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    cardText: {
        fontFamily: "TitilliumWeb-Regular",
        textAlign: 'center',
        fontSize: 15,
        color: "#0D1F3C"
    },
    introVideo:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
});

export default styles;