import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, ToastAndroid } from "react-native";
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const ModuleButton = ({ label, timeReqdInMins, onPress, isComplete, percentage }) => {
    // isComplete = isComplete === "100"
    var date = "";
    if (isComplete === "100") {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = monthNames[today.getMonth()]
        var yyyy = today.getFullYear();

        date = mm + " " + dd + ", " + yyyy;
    }
    return (
        <TouchableOpacity
            onPress={() => (isComplete !== "0" ? onPress ? onPress() : {} : ToastAndroid.show("Module Locked !", ToastAndroid.SHORT))}
            style={styles(isComplete).container}
        >
            {isComplete === "100" ?
                <Image style={styles(isComplete).circle} source={require("_assets/check-circle.png")} />
                : <View style={styles(isComplete).circle} />
            }
            <Text style={styles(isComplete).text}>{label}</Text>
            <Text style={styles(isComplete).time}>{timeReqdInMins} Mins</Text>
            <Text style={styles(isComplete).percentage}>{isComplete}%</Text>
            {date ? <Text style={styles(isComplete).date}>{date}</Text> : null}


        </TouchableOpacity >
    );
};

const styles = (isComplete) => StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: 30,
        padding: 5,
        backgroundColor: "#EDF1F9",
        height: 60,
        width: 340,
        // right: 30,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
    },
    text: {
        alignSelf: 'flex-start',
        left: 50,
        color: isComplete === "0" ? "#0D1F3C60" : "#0D1F3C",
        // marginRight: 140,
        fontFamily: 'TitilliumWeb-SemiBold',
        fontSize: 15,
        bottom: 20,
    },
    time: {
        color: "#485068",
        marginRight: 180,
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 15,
        bottom: 15,
    },
    circle: {
        top: 15,
        right: 150,
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        borderWidth: 1,
        borderColor: "#0D1F3C60"
    },
    percentage: {
        color: isComplete === "0" ? "#DF5060" : isComplete === "100" ? "#75BF72" : "#347AF0",
        alignSelf: 'flex-end',
        bottom: 60,
        right: 15,
    },
    date: {
        color: "#485068",
        alignSelf: 'flex-end',
        bottom: 55,
        right: 15,
    }
});

export default ModuleButton;
