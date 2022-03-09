const algosdk= require('algosdk')

createadress=()=>{
	let account=algosdk.generateAccount();
	console.log("Account address :",account.addr)

	let mn = algosdk.secretKeyToMnemonic(account.sk);
	console.log("Account Mnemonic :",mn)
}

module.exports = createadress