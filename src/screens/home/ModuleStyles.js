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
        bottom: 40,
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
    moduleInfoNextButton: {
        alignSelf: 'center',
        bottom: 90

    },

    // FOR ADDRESS ACTIVITY: 
    addressImage: {
        top: 0.2 * windowHeight,
        alignSelf: 'center'
    },
    addressNextButton: {
        alignSelf: 'center',
        top: 140,
    },
    loadingContainer: {
        top: 80,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#F5FCFF',
        width: 0.6 * windowWidth,
    },
    lottie: {
        width: 100,
        height: 100,
    },
    addressCard: {
        top: 80,
        borderRadius: 20,
        height: 280,
        padding: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    addressCardHeading: {
        marginTop: 20,
        fontFamily: "TitilliumWeb-SemiBold",
        color: "#0D1F3C",
        fontSize: 26,
    },
    addressCardContentContainer: {
        marginTop: 15,
        width: 300,
        height: 50
    },

    addressCardContent: {
        textAlign: 'left',
        width: 250,
    },
    copyButton: {
        alignSelf: 'flex-end',
        // left: 30,
        bottom: 35,
    },
    rewardContainer: {
        alignSelf: 'center',
        top: 80,
    },

    rewardHeading: {
        fontFamily: "TitilliumWeb-SemiBold",
        fontSize: 28,
        textAlign: 'center'
    },

    rewardAmount: {
        fontFamily: "TitilliumWeb-Black",
        fontSize: 40,
    },
    rewardImage: {
        alignSelf: "center",
        top: 0.15 * windowHeight
    },
    rewardNextButton: {
        alignSelf: 'center',
        top: 130,
    },

    // Transactions:
    cardsContainerTxn: {
        flex: 3,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    cardsContainerStyleTxn: {
        borderRadius: 16,
        padding: 10,
        backgroundColor: 'white',
        borderWidth: 0,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#808080',
        marginTop: 50,
        elevation: 10
    },
    txnAddressCardHeading: {
        marginTop: 20,
        fontFamily: "TitilliumWeb-SemiBold",
        color: "#0D1F3C",
        fontSize: 20,
    },
    txnAddressCardContentContainer: {
        // marginTop: 15,
        width: 300,
        height: 50
    },
    txnAddressCardContent: {
        textAlign: 'left',
        width: 250,
    },
    txnAddressCardContentPasteContainer: {
        alignSelf: 'flex-end',
        bottom: 20,
    },

    txnAddressCardContentPaste: {
        fontFamily: "TitilliumWeb-Regular",
        fontSize: 14,
        color: "#78839C",
        backgroundColor: "white"
    },


});

export default styles;