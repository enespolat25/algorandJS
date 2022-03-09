const algosdk = require('algosdk');

const server="https://testnet-algorand.api.purestake.io/ps2";
const port="";
const token={
	"x-api-key": "d0tj2DSVGb28ppQa1MQpi9k35hArrNPP5PNLzXdU" // fill in yours
};

var alice_mnemonic = "mouse parade pond real rare mule metal vacant wire typical unfair celery canal beyond item almost daughter shiver arctic correct beyond cannon congress absent eternal"; // fill in yours
var aliceAccount = algosdk.mnemonicToSecretKey(alice_mnemonic);
var bobAddress = 'K4NXOY7PNSMVKM34MGZULBEH47JLGT2JO2UA7OQTFM27BD73YOOE35M4MI'; // change to yours

let client = new algosdk.Algodv2(token, server, port);

(async () => {
    let assetID = 13300122; // change to your own assetID
    let params = await client.getTransactionParams().do();
    let sender = aliceAccount.addr;
    let recipient = bobAddress;
    let revocationTarget = undefined;
    let closeRemainderTo = undefined;
    let note = undefined;
    let amount = 200000;
    let txn = algosdk.makeAssetTransferTxnWithSuggestedParams(sender, recipient, closeRemainderTo, revocationTarget,
        amount, note, assetID, params);
    let rawSignedTxn = txn.signTxn(aliceAccount.sk)
    let tx = (await client.sendRawTransaction(rawSignedTxn).do());
    console.log("Transaction : " + tx.txId);
})().catch(e => {
    console.log(e);
});