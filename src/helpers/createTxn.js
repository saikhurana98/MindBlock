import AsyncStorage from '@react-native-async-storage/async-storage';

// for bitcoin: 
import '_shim';
const bitcoin = require("bitcoinjs-lib");

const createP2PKH = async (inputAddress, outputAddress, amountSatoshi) => {
    var privateKey = await AsyncStorage.getItem("@privateKey");
    var publicKey = await AsyncStorage.getItem("@publicKey");
    var address = await AsyncStorage.getItem("@address");
    var keyBuffer = Buffer.from(privateKey, 'hex')
    var keys = bitcoin.ECPair.fromPrivateKey(keyBuffer);
    var newtx = {
        inputs: [{ addresses: [inputAddress] }],
        outputs: [{ addresses: [outputAddress], value: parseInt(amountSatoshi) }]
    };
    fetch("https://api.blockcypher.com/v1/bcy/test/txs/new",
        {
            method: "POST",
            body: JSON.stringify(newtx)
        })
        .then(function (response) {
            return response.json();
        }).then(function (oldTmptx) {
            let tmptx = oldTmptx;
            console.log(tmptx);
            // signing each of the hex-encoded string required to finalize the transaction
            tmptx.pubkeys = [];
            console.log("HERE: ", tmptx);
            tmptx.signatures = tmptx.tosign.map(function (tosign, n) {
                tmptx.pubkeys.push(publicKey);
                return bitcoin.script.signature.encode(
                    keys.sign(Buffer.from(tosign, "hex")),
                    0x01,
                ).toString("hex").slice(0, -2);
            });
            console.log(tmptx);
            // sending back the transaction with all the signatures to broadcast
            fetch('https://api.blockcypher.com/v1/bcy/test/txs/send',
                {
                    method: "POST",
                    body: JSON.stringify(tmptx)
                })
                .then(function (response) {
                    return response.text();
                }).then(function (finaltx) {
                    console.log(finaltx);
                })
                .catch(function (xhr) {
                    console.log(xhr.responseText);
                });
        })
        .catch((err) => {
            console.log("Error occurred: ", err)
        });

}

export default createP2PKH;