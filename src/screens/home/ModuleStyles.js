import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
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
    carouselHeading: {
        alignItems: 'center',
        top: 20,
    },
    carouselHeadingText: {
        fontFamily: "TitilliumWeb-SemiBold",
        color: "#0D1F3C",
        fontSize: 26,
    },

    carouselTextContainer: {
        top: 150,
        alignSelf: 'center',
        width: windowWidth * 0.7
    },
    carouselText: {
        textAlign: 'center',
        fontFamily: "TitilliumWeb-Regular",
        color: "#0D1F3C",
        fontSize: 15,
    },

    carouselContainer: {
        flex: 1,
        right: 10,
    },
    itemContainer: {
        top: 80,
        width: windowWidth * 0.8,
        height: windowHeight * 0.6,
        backgroundColor: '#FFFFFF'
    },
    itemLabel: {
        color: 'blue',
        fontSize: 24
    },
    counter: {
        marginTop: 25,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    // FOR ADDRESS ACTIVITY: 
    addressImage: {
        top: 0.2 * windowHeight,
        alignSelf: 'center'
    },
    addressNextButton: {
        alignSelf: 'center',
        top: 0.3 * windowHeight,
    }

});

export default styles;