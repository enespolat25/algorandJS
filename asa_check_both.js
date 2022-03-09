const algosdk=require('algosdk');

const server="https://testnet-algorand.api.purestake.io/ps2";
const port="";
const token={
	"x-api-key": "d0tj2DSVGb28ppQa1MQpi9k35hArrNPP5PNLzXdU" // fill in yours
};
//asset-id= 76230366
var aliceAddress = 'KWGRCHI5TX6VW7UHIAVIMHAOLE4YSSL3PC4CTYMKKSJ2CYEBSRLJEG6TXI'; // change to yours
//alice mnemonic:"mouse parade pond real rare mule metal vacant wire typical unfair celery canal beyond item almost daughter shiver arctic correct beyond cannon congress absent eternal"
var bobAddress = 'K4NXOY7PNSMVKM34MGZULBEH47JLGT2JO2UA7OQTFM27BD73YOOE35M4MI'; // change to yours
//bob mnemonic="depth ahead gate lottery act bench damp sorry member allow alert text ball cargo diary uniform achieve dinner vapor taste scan kiwi season abandon finish"

let client=new algosdk.Algodv2(token, server, port);

( async() => {

    let alice_account_info = (await client.accountInformation(aliceAddress).do());
    console.log("Asset of Alice: ");
    console.log(alice_account_info.assets);

    let bob_account_info = (await client.accountInformation(bobAddress).do());
    console.log("Asset of Bob: ");
    console.log(bob_account_info.assets);

})().catch(e => {
	console.log(e);
})
