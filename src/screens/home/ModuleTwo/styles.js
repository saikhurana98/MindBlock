import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#EDF1F9",
    },
    headingContainer: {
        flex: 2,
        alignSelf: 'center'
    },
    headingText: {
        fontFamily: "TitilliumWeb-SemiBold",
        color: "#0D1F3C",
        fontSize: 26,
    },
    descriptionContainer: {
        flex: 4,
        width: wp("80%"),
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
        flex: 3,
    },
    wonderingImage: {
        flex: 6,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    privacyImage: {
        flex: 6,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    addressCard: {
        flex: -2,
        bottom: 20,
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
    introVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    disclaimerTextContainer: {
        flex: 1,
        width: wp("80%"),
        alignSelf: 'center',
        bottom: 30,
    },
    disclaimerText: {
        fontFamily: "TitilliumWeb-Regular",
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 15,
        color: "#FF0000"
    }
})
export default styles;