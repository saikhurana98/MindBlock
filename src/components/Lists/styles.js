import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40, 
        padding: 50,
    },
    item: {
        width: '100%',
        paddingHorizontal: 20,
        overflow: 'hidden',
        paddingVertical: 10,
        marginBottom: 5,
    },

    balanceContainer: {
        backgroundColor: Colors.grey,
        // paddingVertical: 10,
        flexDirection: "row",
        marginHorizontal: 13,
        
        alignItems: "center",
        marginBottom: 10
    },
    sectionHeading: {
        color: Colors.blackText,
        fontWeight: "bold",
        fontSize: 24,
        marginBottom: 10,
    },
    currentAmountLabelText: {
        color: Colors.darkBlue,
        fontSize: 12,
    },
    addressText: {
        color: Colors.blackText,
        fontWeight: "bold",
        fontSize: 12,
    }
});

export default styles;
