import React from 'react';
import { Buttons } from "_components";
import { NAVIGATION as navigation } from '../screens/home/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BeaconContext from './contextAPI';
import BitcoinImage from '_assets/bitcoinImage.svg'
import MobileScanImage from '_assets/mobileScanImage.svg'
import ConfusedImage from '_assets/confusedImage.svg'
import CreditImage from "_assets/creditImage.svg"
import ArchImage from '_assets/archImage.svg'
import ShieldImage from '_assets/shieldImage.svg'
// import ShieldImage from '_assets/shieldImage.svg'



import styles from '../screens/home/styles';

var DATA = []
const ModuleFourData = [];
const ModuleSixData = [];

var slideOne = {
    heading: "Owning a Bitcoin",
    text: "In fiat banking, we would say a person owns $5 if the person has currency notes &\
    coins or if the bank says a person owns $5. In the bitcoin world,\
    things are a little different. If you can  prove that you own 5 BTC then you own 5 BTC.",
    image: <BitcoinImage />
}
var slideTwo = {
    heading: "How to Prove?",
    text: "The obvious question that arises now is that how do you prove that you own 5 BTC.\
    This is where the secret key we talked about comes into play.\
    Let’s say Alice paid Bob 3 BTC. Let’s assume for a moment Alice owns 3 BTC.\
    Now, Alice would take the Bob’s Bitcoin Wallet address\
    and “Transfer” him 3 BTC. Consider the word Transfer a bit losely over here..",
    image: <MobileScanImage />
}

var slideThree = {
    heading: "Still Confused? Great!",
    text: "Alice will take Bob’s Bitcoin Wallet Address and create a transaction.\
    At this stage, Alice also needs to prove that she actually owns the 3 BTC\
    that she wants to transfer. For exactly this purpose she needs her secret\
    key. Alice will exactly prove that she has recieved 3 or more BTC from other\
    people. Next time bob wants to spend these\
    3 BTC, he will prove that he recieved the money from Alice.",
    image: <ConfusedImage />
}

var slideFour = {
    heading: "Creating a Transaction",
    text: "Now that we know what does owning a bitcoin means. We can now figure out what it means to create a transaction.\
    A bitcoin transaction obviously requires the address\
    of the reciever and the ammount to be transferred.\
    But this also contains the address of the transaction\
    through which he recieved the BTC he’s now wanting to spend.\
    Note: Every bitcoin transactoin has an address.",
    image: <CreditImage />
}

ModuleFourData.push(slideOne, slideTwo, slideThree, slideFour);

var moduleFiveSlideOne = {
    heading: "It’s Awesome",
    text: "Now that you’ve created your first bitcoin transaction,\
    let’s see what all happens behind the scenes and how blockchain makes it secure and completely decentralised. ",
    image: <ArchImage />
}


var moduleFiveSlideTwo = {
    text: "Blockchain is bassed on modern cryptographic tools like SHA256 Hash Function. What this basically means is that\
    a Cryptocurrencies like Bitcoin instead on relying on the system of vesting trust in a central body, basses trust in computaional work. ",
    heading: "is it secure?",
    image: <ShieldImage />
}


var moduleFiveSlideThree = {
    heading: "Sounds Cool but how does it work?",
    videoKey: "BFXb3M7OjGo",
}

ModuleSixData.push(moduleFiveSlideOne, moduleFiveSlideTwo, moduleFiveSlideThree);
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
                    onPress={() => navigation.navigate('@moduleOne', {
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
                    onPress={() => navigation.navigate('@moduleTwo', {
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
                    onPress={() => navigation.navigate('@moduleFour', {
                        moduleName: "@Module4",
                        nextModule: "@Module5",
                        moduleData: ModuleFourData,
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
                    onPress={() => navigation.navigate('@moduleSix', {
                        moduleName: "@Module6",
                        nextModule: "@Module7",
                        moduleData: ModuleSixData,
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

