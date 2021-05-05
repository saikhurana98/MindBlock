import React from 'react';
import { Buttons } from "_components";
import { NAVIGATION as navigation } from '../screens/home/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../screens/home/styles';

var DATA = []

// const initStatus = async () => {
//     await AsyncStorage.getItem("@Module1");
// }

const IntroModule =
    <Buttons.ModuleButton
        key={0} fill={true}
        label={"Why Bitcoin?"}
        timeReqdInMins={"3"}
        isComplete={AsyncStorage.getItem("@Module1")}
        onPress={() => navigation.navigate('@moduleInfo', {
            moduleName: "@Module1"
        })
        } />

const AddressInfoModule =
    <Buttons.ModuleButton
        key={1} fill={true}
        label={"A/C Address"}
        timeReqdInMins={"3"}
        isComplete={AsyncStorage.getItem("@Module1")}
        onPress={() => navigation.navigate('@moduleInfo', {
            moduleName: "@Module2"
        })} />

const AddModule =
    <Buttons.ModuleActivityButton
        key={2} fill={true}
        label={"Address Generation"}
        label2={"Milestone 1"}
        isComplete={false}
        onPress={() => navigation.navigate('@moduleAddress')} />

const Info1Module =
    <Buttons.ModuleButton
        key={4} fill={true}
        label={"Module Name"}
        timeReqdInMins={"3"}
        isComplete={AsyncStorage.getItem("@Module1")}
        onPress={() => navigation.navigate('@moduleInfo', {
            moduleName: "@Module4"
        })} />

const TxnModule =
    <Buttons.ModuleActivityButton
        key={3} fill={true} label={"Transaction"}
        label2={"Milestone 2"}
        isComplete={true}
        onPress={() => navigation.navigate('@moduleTxn')} />

const Info2Module =
    <Buttons.ModuleButton
        key={4} fill={true}
        label={"Module Name"}
        timeReqdInMins={"3"}
        isComplete={AsyncStorage.getItem("@Module1")}
        onPress={() => navigation.navigate('@moduleInfo', {
            moduleName: "@Module5"
        })} />

const Info3Module =
    <Buttons.ModuleButton
        key={5} fill={true}
        label={"Module Name"}
        timeReqdInMins={"3"}
        isComplete={AsyncStorage.getItem("@Module1")}
        onPress={() => navigation.navigate('@moduleInfo', {
            moduleName: "@Module6"
        })} />


DATA.push(IntroModule, AddressInfoModule, AddModule, Info1Module, TxnModule, Info2Module, Info3Module)
export default DATA;

