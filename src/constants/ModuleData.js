import React from 'react';
import { Buttons } from "_components";
import { NAVIGATION as navigation } from '../screens/home/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BeaconContext from './contextAPI';

import styles from '../screens/home/styles';

var DATA = []

// const initStatus = async () => {
//     await AsyncStorage.getItem("@Module1");
// }

const IntroModule =
    <BeaconContext.Consumer>
        {
            context => (
                // console.log(context)
                <Buttons.ModuleButton
                    key={0} fill={true}
                    label={"Why Bitcoin?"}
                    timeReqdInMins={"3"}
                    isComplete={context.module1}
                    onPress={() => navigation.navigate('@moduleInfo', {
                        moduleName: "@Module1",
                        nextModule: "@Module2",
                    })
                    } />
            )
        }
    </BeaconContext.Consumer>

const AddressInfoModule =
    <BeaconContext.Consumer>
        {
            context => (
                <Buttons.ModuleButton
                    key={1} fill={true}
                    label={"A/C Address"}
                    timeReqdInMins={"3"}
                    isComplete={context.module2}
                    onPress={() => navigation.navigate('@moduleInfo', {
                        moduleName: "@Module2",
                        nextModule: "@Module3",
                    })} />
            )
        }
    </BeaconContext.Consumer>


const AddModule =
    <BeaconContext.Consumer>
        {
            context => (
                <Buttons.ModuleActivityButton
                    key={2} fill={true}
                    label={"Address Generation"}
                    label2={"Milestone 1"}
                    isComplete={context.module3}
                    onPress={() => navigation.navigate('@moduleAddress', {
                        moduleName: "@Module3",
                        nextModule: "@Module4",
                    })} />
            )
        }
    </BeaconContext.Consumer>

const Info1Module =
    <BeaconContext.Consumer>
        {
            context => (
                <Buttons.ModuleButton
                    key={4} fill={true}
                    label={"Module Name"}
                    timeReqdInMins={"3"}
                    isComplete={context.module4}
                    onPress={() => navigation.navigate('@moduleInfo', {
                        moduleName: "@Module4",
                        nextModule: "@Module5",
                    })} />
            )
        }
    </BeaconContext.Consumer>


const TxnModule =
    <BeaconContext.Consumer>
        {
            context => (
                <Buttons.ModuleActivityButton
                    key={3} fill={true} label={"Transaction"}
                    label2={"Milestone 2"}
                    isComplete={context.module5}
                    onPress={() => navigation.navigate('@moduleTxn', {
                        moduleName: "@Module5",
                        nextModule: "@Module6",
                    })} />
            )
        }
    </BeaconContext.Consumer>



const Info2Module =
    <BeaconContext.Consumer>
        {
            context => (
                <Buttons.ModuleButton
                    key={4} fill={true}
                    label={"Module Name"}
                    timeReqdInMins={"3"}
                    isComplete={context.module6}
                    onPress={() => navigation.navigate('@moduleInfo', {
                        moduleName: "@Module6",
                        nextModule: "@Module7",
                    })} />
            )
        }
    </BeaconContext.Consumer>


const Info3Module =

    <BeaconContext.Consumer>
        {
            context => (
                <Buttons.ModuleButton
                    key={5} fill={true}
                    label={"Module Name"}
                    timeReqdInMins={"3"}
                    isComplete={context.module7}
                    onPress={() => navigation.navigate('@moduleInfo', {
                        moduleName: "@Module7",
                        nextModule: "@Finish",
                    })} />
            )
        }
    </BeaconContext.Consumer>



DATA.push(IntroModule, AddressInfoModule, AddModule, Info1Module, TxnModule, Info2Module, Info3Module)
export default DATA;

