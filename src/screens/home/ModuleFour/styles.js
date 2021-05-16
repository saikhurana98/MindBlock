import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#EDF1F9",
    },
    headingContainer: {
        flex: 1,
        alignSelf: 'center'
    },
    headingText: {
        fontFamily: "TitilliumWeb-SemiBold",
        color: "#0D1F3C",
        fontSize: 26,
    },
    descriptionContainer: {
        flex: 2,
        width: wp("80%"),
        alignSelf: 'center'
    },
    descriptionText: {
        textAlign: 'center',
        fontFamily: "TitilliumWeb-Regular",
        color: "#485068",
        fontSize: 15,
    },


    carouselContainer: {
        flex: 14,
    },
    itemContainer: {
        flex: 1,
        width: wp("80%"),
        backgroundColor: '#FFFFFF'
    },
    cardImage: {
        flex: 3,
        alignSelf: 'center'
    },
    carouselHeading: {
        flex: 2,
        alignItems: 'center',
        top: 20,
    },
    carouselHeadingText: {
        fontFamily: "TitilliumWeb-SemiBold",
        color: "#0D1F3C",
        fontSize: 26,
    },
    carouselTextContainer: {
        flex: 5,
        alignSelf: 'center',
        width: wp("70%")
    },
    carouselText: {
        textAlign: 'center',
        fontFamily: "TitilliumWeb-Regular",
        color: "#0D1F3C",
        fontSize: 15,
    },
    itemLabel: {
        color: 'blue',
        fontSize: 24
    },
    moduleInfoNextButton: {
        flex: 4,
        top: 20,
        alignSelf: 'center',
    },

});

export default styles;