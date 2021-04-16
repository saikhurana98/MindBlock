import React, { useState } from 'react';
import {
    Text, View, Platform, UIManager,
} from 'react-native';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}
import { Lists } from '_components'
import styles from "./styles";


export default function TestFile({ route, navigation }) {
    const { accountDetails } = route.params;
    console.log(accountDetails);
    const txnRefs = accountDetails.txrefs
    console.log("TXREFS: ", txnRefs)

    return (
        < View style={styles.container} >
            {
                txnRefs.map((item) => {
                    return (
                        <View>
                            <Lists.CollapsibleList item={item} header={item.tx_hash} />
                        </View>
                    )
                })
            }

        </View >

    );
}
