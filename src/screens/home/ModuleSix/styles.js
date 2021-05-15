import { StyleSheet, Dimensions } from "react-native";

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


    carouselContainer: {
        flex: 1,
        right: 10,
        bottom: 40,
    },
    itemContainer: {
        flex: 1,
        top: 80,
        width: windowWidth * 0.8,
        height: windowHeight * 0.6,
        backgroundColor: '#FFFFFF'
    },
    cardImage: {
        flex: 2,
        alignSelf: 'center'
    },
    carouselHeading: {
        flex: 1,
        alignItems: 'center',
        top: 20,
        
    },
    carouselHeadingText: {
        fontFamily: "TitilliumWeb-SemiBold",
        color: "#0D1F3C",
        fontSize: 26,
        textAlign: 'center',
    },
    carouselTextContainer: {
        flex: 5,
        // top: 150,
        alignSelf: 'center',
        width: windowWidth * 0.7
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
    counter: {
        marginTop: 25,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    moduleInfoNextButton: {
        alignSelf: 'center',
        bottom: 90

    },

});

export default styles;